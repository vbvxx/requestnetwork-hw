import { InjectedFormikProps, withFormik } from "formik";
import * as React from "react";
import * as Yup from "yup";
//@ts-ignore
import * as Web3 from "web3";
import { FormContainer } from "src/components/FormContainer";
import { FormLabel } from "src/components/FormLabel";
import { Input } from "src/components/Input";
import { Text } from "src/components/Text";
import { FormRaisedButton } from "src/components/FormButton";
import { Paper } from "@material-ui/core";

export interface EmployeeFormValues {
  address: string;
}

interface FormProps {
  onSubmit: (values: EmployeeFormValues) => Promise<void>;
}

const InnerForm: React.SFC<
  InjectedFormikProps<FormProps, EmployeeFormValues>
> = props => {
  return (
    <Paper style={{ padding: "20px" }}>
      <FormContainer onSubmit={props.handleSubmit}>
        <FormLabel>Check my payslips</FormLabel>
        <FormLabel>
          <Input
            id="address"
            placeholder="Your Ethereum address"
            type="text"
            onChange={props.handleChange}
            value={props.values.address}
            border={
              props.touched.address
                ? props.errors.address && "1px solid red"
                : undefined
            }
          />
          {props.touched.address &&
            props.errors.address && (
              <Text color="red">{props.errors.address}</Text>
            )}
        </FormLabel>
        <FormRaisedButton type="submit" disabled={props.isSubmitting}>
          Submit
        </FormRaisedButton>
      </FormContainer>
    </Paper>
  );
};

const EmployeeForm = withFormik<FormProps, EmployeeFormValues>({
  mapPropsToValues: () => ({ address: "" }),
  validationSchema: Yup.object().shape({
    address: Yup.string().test(
      "ethreumValidAddress",
      "Invalid eth address",
      function(value) {
        return Web3.utils.isAddress(value);
      }
    )
  }),
  handleSubmit: (values, bag) => {
    bag.props.onSubmit(values).then(() => {
      bag.setSubmitting(false);
      bag.resetForm({ address: "" });
    });
  }
})(InnerForm);

export default EmployeeForm;
