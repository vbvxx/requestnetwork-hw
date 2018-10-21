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
  errorMsg?: string;
}
type Props = OwnProps & InjectedRequestProps;

class Employer extends React.Component<Props, State> {
  state = {
    requestId: undefined,
    requestPending: false,
    errorMsg: undefined
  };

  onTransactionSubmit = async (values: FormValues) => {
    const { createRequestAsAPayer } = this.props.requestProps;
    this.setState({
      requestId: undefined,
      requestPending: true,
      errorMsg: undefined
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
      this.setState({ requestPending: false, errorMsg: errorMsg });
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
