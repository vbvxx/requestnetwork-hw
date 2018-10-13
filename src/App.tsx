import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Main } from "./containers/Routes";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Main />
      </Router>
    );
  }
}

export default App;
