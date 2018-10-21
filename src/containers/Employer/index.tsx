import * as React from "react";
import {
  withRequest,
  InjectedRequestProps
} from "../RequestNetwork/withRequest";
import { RouteComponentProps } from "react-router";
import EmployerForm, { FormValues } from "./EmployerForm";
import styled from "styled-components";
import { Row } from "src/components/Row";
import { TransactionInfo } from "./TransactionInfo";

const EmployerContainer = styled(Row)`
  align-items: left;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

interface OwnProps {
  routeProps: RouteComponentProps;
}
interface State {
  requestId?: string;
  requestPending: boolean;
}
type Props = OwnProps & InjectedRequestProps;

class Employer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      requestId: undefined,
      requestPending: false
    };
  }

  onTransactionSubmit = async (values: FormValues) => {
    const { createRequestAsAPayer } = this.props.requestProps;
    this.setState({ requestId: undefined, requestPending: true });
    const requestId = await createRequestAsAPayer(
      values.address,
      values.amount
    );
    this.setState({
      requestId: requestId,
      requestPending: false
    });
  };

  render() {
    const { requestPending, requestId } = this.state;
    return (
      <EmployerContainer>
        <EmployerForm onSubmit={this.onTransactionSubmit} />
        <TransactionInfo inProgress={requestPending} requestId={requestId} />
      </EmployerContainer>
    );
  }
}

export default withRequest(Employer);
