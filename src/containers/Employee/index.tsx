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

interface OwnProps {
  routeProps: RouteComponentProps;
}
type Props = OwnProps & InjectedRequestProps;
interface State {
  requestsArray: IEvent[];
}

class Employee extends React.Component<Props, State> {
  state = { requestsArray: [] };

  onSubmit = async (values: EmployeeFormValues) => {
    const requestsArray = await this.props.requestProps.getRequestByAddress(
      values.address
    );
    this.setState({ requestsArray: requestsArray });
  };

  render() {
    return (
      <ColumnCenter>
        <PageTitle>Employee</PageTitle>
        <EmployeeForm onSubmit={this.onSubmit} />
      </ColumnCenter>
    );
  }
}

export default withRequest(Employee);
