import { InjectedFormikProps, withFormik } from "formik";
import * as React from "react";
import * as Yup from "yup";
//@ts-ignore
import * as Web3 from "web3";
import { createStyles } from "@material-ui/core";
import { Form, Input, Button } from "../../components/Theme";

interface FormValues {
  address: string;
  amount: string;
}

interface FormProps {
  address?: string;
  amount?: string;
}

const InnerForm: React.SFC<
  InjectedFormikProps<FormProps, FormValues>
> = props => (
  <Form onSubmit={props.handleSubmit} style={styles.root}>
    <Input
      id="address"
      placeholder="Employee Ethereum address"
      type="text"
      onChange={props.handleChange}
      value={props.values.address}
      style={styles.textInput}
      border={props.errors.address && "1px solid red"}
    />
    {props.touched.address &&
      props.errors.address && <div>{props.errors.address}</div>}
    <Input
      id="amount"
      placeholder="Amount"
      type="text"
      onChange={props.handleChange}
      value={props.values.amount}
      style={styles.textInput}
    />
    {props.touched.amount &&
      props.errors.amount && <div>{props.errors.amount}</div>}
    <Button type="submit" disabled={props.isSubmitting}>
      Submit
    </Button>
  </Form>
);

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
    amount: Yup.number()
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  }
})(InnerForm);

const styles = createStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    minWidth: 340
  },
  label: {
    marginTop: 40,
    marginBottom: 20
  },
  textInput: {
    marginBottom: 20
  },
  button: {
    margin: 0
  }
});

export default EmployerForm;
