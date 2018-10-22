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

export interface IFormValues {
  address: string;
  amount: string;
}

interface IFormProps {
  onSubmit: (values: IFormValues) => Promise<void>;
}

const InnerForm: React.SFC<
  InjectedFormikProps<IFormProps, IFormValues>
> = props => {
  // TODO: Use withStyles
  return (
    <Paper style={{ padding: 20 }}>
      <FormContainer onSubmit={props.handleSubmit}>
        <Label>Create a pay slip</Label>
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

const EmployerForm = withFormik<IFormProps, IFormValues>({
  handleSubmit: (values, bag) => {
    bag.props.onSubmit(values).then(() => {
      bag.setSubmitting(false);
      bag.resetForm({ address: "", amount: "" });
    });
  },
  mapPropsToValues: () => ({ address: "", amount: "" }),
  validationSchema: Yup.object().shape({
    address: Yup.string().test(
      "ethreumValidAddress",
      "Invalid eth address",
      value => {
        return Web3.utils.isAddress(value);
      }
    ),
    amount: Yup.string().test("isValidAmount", "Invalid amount", value => {
      return !Number.isNaN(+value);
    })
  })
})(InnerForm);

export default EmployerForm;
