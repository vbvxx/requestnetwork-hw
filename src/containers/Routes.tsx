import * as React from "react";
import { Route, RouteComponentProps } from "react-router";
import { withRequest, InjectedRequestProps } from "./withRequest";

const HomeContainer = (props: RouteComponentProps & InjectedRequestProps) => {
  console.info(props);
  return (
    <React.Fragment>
      <h1>Home</h1>
      <div>
        <p>{props.requestNetworkProps.currentAccount}</p>
      </div>
    </React.Fragment>
  );
};

const connectedHomeContainer = withRequest(HomeContainer);

const EmployerContainer = (props: RouteComponentProps) => {
  return <h1>Employer</h1>;
};

const EmployeeContainer = (props: RouteComponentProps) => {
  return <h1>Employee</h1>;
};

export const Main = () => (
  <React.Fragment>
    <Route exact={true} path="/" component={connectedHomeContainer} />
    <Route exact={true} path="/employer" render={EmployerContainer} />
    <Route exact={true} path="/employee" render={EmployeeContainer} />
  </React.Fragment>
);
