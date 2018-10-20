import * as React from "react";
import {
  withRequest,
  InjectedRequestProps
} from "../RequestNetwork/withRequest";
import { RouteComponentProps } from "react-router";
import { Success } from "./Success";
import EmployerForm, { FormValues } from "./EmployerForm";
import { Loader } from "src/components/Loader";
import { ColumnCenter } from "src/components/ColumnCenter";
import { PageTitle } from "src/components/PageTitle";

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
    const { requestId, requestPending } = this.state;
    return (
      <ColumnCenter>
        <PageTitle>Employer</PageTitle>
        <EmployerForm onSubmit={this.onTransactionSubmit} />
        {requestPending && <Loader />}
        {requestId !== undefined && <Success requestId={requestId} />}
      </ColumnCenter>
    );
  }
}

export default withRequest(Employer);
