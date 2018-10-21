import * as React from "react";
import { RouteComponentProps } from "react-router";
import EmployeeForm, { EmployeeFormValues } from "./EmployeeForm";
import {
  InjectedRequestProps,
  withRequest
} from "../RequestNetwork/withRequest";
import { IEvent } from "../RequestNetwork";
import ResultsTable from "./ResultsTable";
import styled from "styled-components";
import { Row } from "src/components/Row";

const EmployeeContainer = styled(Row)`
  align-items: left;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

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
    const { isFetching, requestsArray } = this.state;
    return (
      <EmployeeContainer>
        <EmployeeForm onSubmit={this.onSubmit} />
        <ResultsTable requestsArray={requestsArray} isFetching={isFetching} />
      </EmployeeContainer>
    );
  }
}

export default withRequest(Employee);
