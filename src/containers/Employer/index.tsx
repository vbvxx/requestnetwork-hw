import * as React from "react";
import { withRequest, InjectedRequestProps } from "../withRequest";
import { RouteComponentProps } from "react-router";
import { Success } from "./Success";
import CreatePayslip from "./CreatePayslip";

interface OwmProps {
  routeProps: RouteComponentProps;
}

interface State {
  transactionHash?: string;
  isFetching: boolean;
}
type Props = OwmProps & InjectedRequestProps;

class Employer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      transactionHash: undefined,
      isFetching: false
    };
  }

  onTransactionSubmit = (address: string, amount: number) => {
    console.log(address, amount);
    this.setState({ transactionHash: undefined, isFetching: true });
    this.props.createRequestAsPayer(this.onTransactionSuccess);
    // .then((transactionHash: string) => {
    // });
  };

  onTransactionSuccess = (transactionHash: string) => {
    this.setState({ transactionHash: transactionHash, isFetching: false });
  };

  render() {
    const { transactionHash, isFetching } = this.state;
    return (
      <div style={styles.container}>
        <h1>Employer</h1>
        <p>{`You are currently connected with: ${
          this.props.requestNetworkProps.currentAccount
        }`}</p>
        <CreatePayslip onSubmit={this.onTransactionSubmit} />
        {isFetching && <p>Loading</p>}
        {transactionHash !== undefined && <Success txHash={transactionHash} />}
      </div>
    );
  }
}

export default withRequest(Employer);

const styles: {
  container: React.CSSProperties;
} = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
};
