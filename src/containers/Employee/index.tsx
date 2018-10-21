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
  errorMsg?: string;
  requestsArray: IEvent[];
  isFetching: boolean;
}

class Employee extends React.Component<Props, State> {
  state = { requestsArray: [], isFetching: false };

  onSubmit = async (values: EmployeeFormValues) => {
    this.setState({ isFetching: true, errorMsg: undefined, requestsArray: [] });
    try {
      const requestsArray = await this.props.requestProps.getRequestByAddress(
        values.address
      );
      this.setState({
        requestsArray: requestsArray as IEvent[],
        isFetching: false
      });
    } catch (err) {
      const errorMsg = `The following error happened ${err}`;
      this.setState({ isFetching: false, errorMsg: errorMsg });
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
