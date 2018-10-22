// import RequestNetworkProvider from "@requestnetwork/react-components";
import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RequestNetworkProvider from "./containers/RequestNetwork/Provider";
import { Main } from "./containers/Routes";

class App extends React.Component {
  public onReqProviderInit = () => {
    // tslint:disable-next-line:no-console
    console.log("library initiated");
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
