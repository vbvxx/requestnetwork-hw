import { InjectedFormikProps, withFormik, Field } from "formik";
import * as React from "react";
import * as Yup from "yup";
//@ts-ignore
import * as Web3 from "web3";
import { FormContainer } from "src/components/FormContainer";
import { FormLabel } from "src/components/FormLabel";
import { FormikMaterialUITextField } from "src/components/Input";
import { FormRaisedButton } from "src/components/FormButton";
import { Paper } from "@material-ui/core";

export interface FormValues {
  address: string;
  amount: string;
}

interface FormProps {
  onSubmit: (values: FormValues) => Promise<void>;
}

const InnerForm: React.SFC<
  InjectedFormikProps<FormProps, FormValues>
> = props => {
  return (
    <Paper style={{ padding: 20 }}>
      <FormContainer onSubmit={props.handleSubmit}>
        <FormLabel>Create a pay slip</FormLabel>
        <Field
          name="address"
          type="text"
          label="Employee Ethereum address"
          component={FormikMaterialUITextField}
        />
        <Field
          name="amount"
          type="text"
          label="Amount"
          component={FormikMaterialUITextField}
        />
        <FormRaisedButton type="submit" disabled={props.isSubmitting}>
          Submit
        </FormRaisedButton>
      </FormContainer>
    </Paper>
  );
};

const EmployerForm = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({ address: "", amount: "" }),
  validationSchema: Yup.object().shape({
    address: Yup.string().test(
      "ethreumValidAddress",
      "Invalid eth address",
      function(value) {
        return Web3.utils.isAddress(value);
      }
    ),
    amount: Yup.string().test("isValidAmount", "Invalid amount", function(
      value
    ) {
      return !Number.isNaN(+value);
    })
  }),
  handleSubmit: (values, bag) => {
    bag.props.onSubmit(values).then(() => {
      bag.setSubmitting(false);
      bag.resetForm({ address: "", amount: "" });
    });
  }
})(InnerForm);

export default EmployerForm;
