import * as React from "react";
import { Route } from "react-router";
import Home from "./Home";
import Employer from "./Employer";
import Employee from "./Employee";

export enum RoutePath {
  Home = "/",
  Employer = "/employer",
  Employee = "/employee"
}

export const Main = () => (
  <React.Fragment>
    <Route exact={true} path={RoutePath.Home} component={Home} />
    <Route exact={true} path={RoutePath.Employer} component={Employer} />
    <Route exact={true} path={RoutePath.Employee} component={Employee} />
  </React.Fragment>
);
