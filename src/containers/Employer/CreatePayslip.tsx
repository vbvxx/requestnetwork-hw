import * as React from "react";
// import {
//   TextField,
//   Button,
//   FormControl,
//   FormLabel,
//   createStyles
// } from "@material-ui/core";
import EmployerForm from "./test";

interface OwnProps {
  onSubmit: (address: string, amount: number) => void;
}

interface State {
  address: string;
  amount: number;
}

type Props = OwnProps;

class CreatePayslip extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      address: "",
      amount: 0
    };
  }

  onSubmit = () => {
    console.log("here");
    this.props.onSubmit("", 0);
  };

  handleAddressChange = (event: any) => {
    this.setState({ address: event.target.value });
  };

  render() {
    return (
      // <FormControl component="fieldset" style={styles.root}>
      //   <FormLabel component="legend" style={styles.label}>
      //     Please enter the wallet address of your employee
      //   </FormLabel>
      //   <TextField
      //     label="Address ethereum"
      //     value={this.state.address}
      //     onChange={this.handleAddressChange}
      //     style={styles.label}
      //   />
      //   <Button
      //     variant="outlined"
      //     color="primary"
      //     type="submit"
      //     style={styles.button}
      //     onClick={this.onSubmit}
      //   >
      //     Create transaction
      //   </Button>
      // </FormControl>
      <EmployerForm />
    );
  }
}

// const styles = createStyles({
//   root: {
//     display: "flex",
//     flexGrow: 1,
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "flex-end"
//   },
//   label: {
//     marginTop: 40,
//     marginBottom: 20
//   },
//   textInput: {
//     marginBottom: 20,
//     maxWidth: 250
//   },
//   button: {
//     margin: 0
//   }
// });

export default CreatePayslip;
