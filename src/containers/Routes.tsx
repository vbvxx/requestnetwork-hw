import * as React from "react";
import { Route, RouteComponentProps } from "react-router";
import Home from "./Home";
import Employer from "./Employer";

export enum RoutePath {
  Home = "/",
  Employer = "/employer",
  Employee = "/employee"
}

const EmployeeContainer = (props: RouteComponentProps) => {
  return <h1>Employee</h1>;
};

export const Main = () => (
  <React.Fragment>
    <Route exact={true} path={RoutePath.Home} component={Home} />
    <Route exact={true} path={RoutePath.Employer} component={Employer} />
    <Route exact={true} path={RoutePath.Employee} render={EmployeeContainer} />
  </React.Fragment>
);
