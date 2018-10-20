import { InjectedFormikProps, withFormik } from "formik";
import * as React from "react";
import * as Yup from "yup";
//@ts-ignore
import * as Web3 from "web3";
import { FormContainer } from "src/components/FormContainer";
import { FormLabel } from "src/components/FormLabel";
import { Input } from "src/components/Input";
import { Text } from "src/components/Text";
import { FormButton } from "src/components/FormButton";
import { Paper } from "@material-ui/core";

export interface FormValues {
  address: string;
  amount: string;
}

interface FormProps {
  onSubmit: (values: FormValues) => void;
}

const InnerForm: React.SFC<
  InjectedFormikProps<FormProps, FormValues>
> = props => {
  return (
    <Paper style={{ padding: 20 }}>
      <FormContainer onSubmit={props.handleSubmit}>
        <FormLabel>Create a pay slip</FormLabel>
        <FormLabel>
          <Input
            id="address"
            placeholder="Employee Ethereum address"
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
        <FormLabel>
          <Input
            id="amount"
            placeholder="Amount"
            type="text"
            onChange={props.handleChange}
            value={props.values.amount}
            border={
              props.touched.amount
                ? props.errors.amount && "1px solid red"
                : undefined
            }
          />
          {props.touched.amount &&
            props.errors.amount && (
              <Text color="red">{props.errors.amount}</Text>
            )}
        </FormLabel>
        <FormButton type="submit" disabled={props.isSubmitting}>
          Submit
        </FormButton>
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
    bag.props.onSubmit(values);
  }
})(InnerForm);

export default EmployerForm;
