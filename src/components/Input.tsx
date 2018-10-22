import { createStyles } from "@material-ui/core";
import MuiTextField, {
  TextFieldProps as MuiTextFieldProps
} from "@material-ui/core/TextField";
import { FieldProps, getIn } from "formik";
import * as React from "react";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export interface TextFieldProps
  extends FieldProps,
    Omit<MuiTextFieldProps, "error" | "name" | "onChange" | "value"> {}

export const fieldToTextField = ({
  field,
  form,
  disabled = false,
  ...props
}: TextFieldProps): MuiTextFieldProps => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form;

  const fieldError = getIn(errors, name);
  const showError = getIn(touched, name) && !!fieldError;

  return {
    ...props,
    ...field,
    disabled: isSubmitting || disabled,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    variant: "standard"
  };
};

export const FormikMaterialUITextField: React.ComponentType<TextFieldProps> = (
  props: TextFieldProps
) => (
  <MuiTextField
    {...fieldToTextField(props)}
    InputLabelProps={{
      style: {
        fontSize: "15px",
        textAlign: "center"
      }
    }}
    style={styles.inputContainer}
  />
);

const styles = createStyles({
  inputContainer: {
    height: 68,
    textAlign: "center",
    width: 300
  }
});
