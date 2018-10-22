import { createStyles, Paper, withStyles, WithStyles } from "@material-ui/core";
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

type Props = IFormProps & WithStyles<typeof styles>;

const InnerForm: React.SFC<
  InjectedFormikProps<Props, IEmployeeFormValues>
> = props => {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
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

const styles = createStyles({
  paper: {
    height: 185,
    padding: "20px"
  }
});

export default withStyles(styles)(EmployeeForm);
