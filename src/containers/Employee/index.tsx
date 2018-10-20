import * as React from "react";
import { RouteComponentProps } from "react-router";
import { ColumnCenter } from "src/components/ColumnCenter";
import { PageTitle } from "src/components/PageTitle";
import EmployeeForm, { EmployeeFormValues } from "./EmployeeForm";
import {
  InjectedRequestProps,
  withRequest
} from "../RequestNetwork/withRequest";
import { IEvent } from "../RequestNetwork";
import { Loader } from "src/components/Loader";

interface OwnProps {
  routeProps: RouteComponentProps;
}
type Props = OwnProps & InjectedRequestProps;
interface State {
  requestsArray: IEvent[];
  isFetching: boolean;
}

class Employee extends React.Component<Props, State> {
  state = { requestsArray: [], isFetching: false };

  onSubmit = async (values: EmployeeFormValues) => {
    this.setState({ isFetching: true });
    const requestsArray = await this.props.requestProps.getRequestByAddress(
      values.address
    );
    this.setState({ requestsArray: requestsArray, isFetching: false });
  };

  render() {
    const { isFetching } = this.state;
    return (
      <ColumnCenter>
        <PageTitle>Employee</PageTitle>
        <EmployeeForm onSubmit={this.onSubmit} />
        {isFetching && <Loader />}
      </ColumnCenter>
    );
  }
}

export default withRequest(Employee);
