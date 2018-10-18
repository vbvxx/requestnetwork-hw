import { InjectedFormikProps, withFormik } from "formik";
import * as React from "react";
import * as Yup from "yup";
//@ts-ignore
import * as Web3 from "web3";
// import { createStyles } from "@material-ui/core";
import { Form, Input, Button, Label, Text } from "../../components/Theme";

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
    <Form onSubmit={props.handleSubmit}>
      <Label>
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
      </Label>
      <Label>
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
          props.errors.amount && <Text color="red">{props.errors.amount}</Text>}
      </Label>
      <Button type="submit" disabled={props.isSubmitting}>
        Submit
      </Button>
    </Form>
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
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      bag.props.onSubmit(values);
      bag.setSubmitting(false);
    }, 1000);
  }
})(InnerForm);

// const styles = createStyles({
// root: {
//   // display: "flex",
//   // flexDirection: "column",
//   // justifyContent: "flex-start",
//   // alignItems: "center",
//   minWidth: 340
// },
// label: {
//   marginTop: 40,
//   marginBottom: 20
// },
// textInput: {
//   marginBottom: 20
// },
// button: {
//   margin: 0
// }
// });

export default EmployerForm;
