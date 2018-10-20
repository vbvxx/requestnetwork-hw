import * as React from "react";
import {
  withRequest,
  InjectedRequestProps
} from "../RequestNetwork/withRequest";
import { RouteComponentProps } from "react-router";
import { Success } from "./Success";
import { Title } from "src/components/Theme";
import EmployerForm, { FormValues } from "./EmployerForm";

interface OwnProps {
  routeProps: RouteComponentProps;
}

interface State {
  transactionHash?: string;
  isFetching: boolean;
}
type Props = OwnProps & InjectedRequestProps;

class Employer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      transactionHash: undefined,
      isFetching: false
    };
  }

  onTransactionSubmit = async (values: FormValues) => {
    console.log(values);
    const { createRequestAsAPayer } = this.props.requestProps;
    this.setState({ transactionHash: undefined, isFetching: true });
    const request = await createRequestAsAPayer(values.address, values.amount);
    console.log(request);
    // this.props.createRequestAsPayer(this.onTransactionSuccess);
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
        <Title>Employer</Title>
        <p>{`You are currently connected with: ${isFetching}`}</p>
        <EmployerForm onSubmit={this.onTransactionSubmit} />
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
