import * as React from "react";
import { Route } from "react-router";
import AppBar from "./AppBar/AppBar";
import Employee from "./Employee";
import Employer from "./Employer";
import Home from "./Home";

export enum RoutePath {
  Home = "/",
  Employer = "/employer",
  Employee = "/employee"
}

export const Main = () => (
  <React.Fragment>
    <AppBar />
    <Route exact={true} path={RoutePath.Home} component={Home} />
    <Route exact={true} path={RoutePath.Employer} component={Employer} />
    <Route exact={true} path={RoutePath.Employee} component={Employee} />
  </React.Fragment>
);
