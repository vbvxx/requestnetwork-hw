import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Row } from "src/components/Row";
import styled from "styled-components";
import { IEvent } from "../RequestNetwork";
import {
  InjectedRequestProps,
  withRequest
} from "../RequestNetwork/withRequest";
import EmployeeForm, { IEmployeeFormValues } from "./EmployeeForm";
import ResultsTable from "./ResultsTable";

const EmployeeContainer = styled(Row)`
  align-items: left;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

interface IOwnProps {
  routeProps: RouteComponentProps;
}
type Props = IOwnProps & InjectedRequestProps;
interface IState {
  errorMsg?: string;
  requestsArray: IEvent[];
  isFetching: boolean;
}

class Employee extends React.Component<Props, IState> {
  state = { requestsArray: [], isFetching: false };

  onSubmit = async (values: IEmployeeFormValues) => {
    this.setState({ isFetching: true, errorMsg: undefined, requestsArray: [] });
    try {
      const requestsArray = await this.props.requestProps.getRequestByAddress(
        values.address
      );
      this.setState({
        isFetching: false,
        requestsArray: requestsArray as IEvent[]
      });
    } catch (err) {
      const errorMsg = `The following error happened: ${err.message}`;
      this.setState({ isFetching: false, errorMsg });
    }
  };

  render() {
    const { requestsArray, isFetching } = this.state;
    return (
      <EmployeeContainer>
        <EmployeeForm onSubmit={this.onSubmit} />
        <ResultsTable requestsArray={requestsArray} isFetching={isFetching} />
      </EmployeeContainer>
    );
  }
}

export default withRequest(Employee);
