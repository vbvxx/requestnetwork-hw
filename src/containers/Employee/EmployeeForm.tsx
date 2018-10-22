import { Paper } from "@material-ui/core";
import { Field, InjectedFormikProps, withFormik } from "formik";
import * as React from "react";
import { FormRaisedButton } from "src/components/FormButton";
import { FormContainer } from "src/components/FormContainer";
import { FormikMaterialUITextField } from "src/components/Input";
import { Label } from "src/components/Label";
// @ts-ignore
import * as Web3 from "web3";
import * as Yup from "yup";

export interface IEmployeeFormValues {
  address: string;
}

interface IFormProps {
  onSubmit: (values: IEmployeeFormValues) => Promise<void>;
}

const InnerForm: React.SFC<
  InjectedFormikProps<IFormProps, IEmployeeFormValues>
> = props => {
  // TODO: Use material ui with classes
  return (
    <Paper style={{ padding: "20px", height: 185 }}>
      <FormContainer onSubmit={props.handleSubmit}>
        <Label>Check my payslips</Label>
        <Field
          name="address"
          type="text"
          label="Your Ethereum address"
          component={FormikMaterialUITextField}
        />
        <FormRaisedButton type="submit" disabled={props.isSubmitting}>
          Submit
        </FormRaisedButton>
      </FormContainer>
    </Paper>
  );
};

const EmployeeForm = withFormik<IFormProps, IEmployeeFormValues>({
  handleSubmit: (values, bag) => {
    bag.props.onSubmit(values).then(() => {
      bag.setSubmitting(false);
      bag.resetForm({ address: "" });
    });
  },
  mapPropsToValues: () => ({ address: "" }),
  validationSchema: Yup.object().shape({
    address: Yup.string().test(
      "ethreumValidAddress",
      "Invalid eth address",
      value => {
        return Web3.utils.isAddress(value);
      }
    )
  })
})(InnerForm);

export default EmployeeForm;
