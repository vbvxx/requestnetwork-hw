import { Consumer } from "@requestnetwork/react-components";
import * as React from "react";
import { Route, RouteComponentProps } from "react-router";

const HomeContainer = (props: RouteComponentProps) => {
  console.info(props);
  return (
    <React.Fragment>
      <Consumer>
        {requestNetwork => {
          console.log(requestNetwork);
          return (
            <div>
              <p>{requestNetwork.currentAccount}</p>
              <p>{requestNetwork.currentNetwork}</p>
            </div>
          );
        }}
      </Consumer>
      <h1>Home</h1>;
    </React.Fragment>
  );
};

const EmployerContainer = (props: RouteComponentProps) => {
  return <h1>Employer</h1>;
};

const EmployeeContainer = (props: RouteComponentProps) => {
  return <h1>Employee</h1>;
};

export const Main = () => (
  <React.Fragment>
    <Route exact={true} path="/" render={HomeContainer} />
    <Route exact={true} path="/employer" render={EmployerContainer} />
    <Route exact={true} path="/employee" render={EmployeeContainer} />
  </React.Fragment>
);