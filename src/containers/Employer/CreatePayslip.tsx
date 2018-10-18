import * as React from "react";
import EmployerForm, { FormValues } from "./EmployerForm";

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

  onSubmit = (values: FormValues) => {
    // this.props.onSubmit("", 0);
    console.log("here");
    console.log(values);
  };

  handleAddressChange = (event: any) => {
    this.setState({ address: event.target.value });
  };

  render() {
    return <EmployerForm onSubmit={this.onSubmit} />;
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
