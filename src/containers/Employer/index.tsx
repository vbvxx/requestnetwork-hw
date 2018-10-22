import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Row } from "src/components/Row";
import styled from "styled-components";
import {
  InjectedRequestProps,
  withRequest
} from "../RequestNetwork/withRequest";
import EmployerForm, { IFormValues } from "./EmployerForm";
import { TransactionInfo } from "./TransactionInfo";

const EmployerContainer = styled(Row)`
  align-items: left;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

interface IOwnProps {
  routeProps: RouteComponentProps;
}
interface IState {
  requestId?: string;
  requestPending: boolean;
  errorMsg?: string;
}
type Props = IOwnProps & InjectedRequestProps;

class Employer extends React.Component<Props, IState> {
  state = {
    errorMsg: undefined,
    requestId: undefined,
    requestPending: false
  };

  onTransactionSubmit = async (values: IFormValues) => {
    const { createRequestAsAPayer } = this.props.requestProps;
    this.setState({
      errorMsg: undefined,
      requestId: undefined,
      requestPending: true
    });
    try {
      const requestId = await createRequestAsAPayer(
        values.address,
        values.amount
      );
      this.setState({
        requestId: requestId as string,
        requestPending: false
      });
    } catch (err) {
      const errorMsg = `The following error happened: ${err.message}`;
      this.setState({ requestPending: false, errorMsg });
    }
  };

  render() {
    const { requestPending, requestId, errorMsg } = this.state;
    return (
      <EmployerContainer>
        <EmployerForm onSubmit={this.onTransactionSubmit} />
        <TransactionInfo
          inProgress={requestPending}
          requestId={requestId}
          errorMsg={errorMsg}
        />
      </EmployerContainer>
    );
  }
}

export default withRequest(Employer);
