import RequestNetworkProvider from "@requestnetwork/react-components";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Main } from "./containers/Routes";

class App extends React.Component {
  public onReqProviderInit = () => {
    // console.log("new library");
  };

  public render() {
    return (
      <RequestNetworkProvider onInit={this.onReqProviderInit}>
        <Router>
          <Main />
        </Router>
      </RequestNetworkProvider>
    );
  }
}

export default App;
