var _a;
import * as React from "react";
import RequestNetworkProvider from "./Provider";
export var Provider = ((_a = React.createContext({
    isReady: false,
    networkMismatch: false,
    currentNetwork: "",
    currentAccount: "",
    requestNetwork: undefined
  })),
  _a.Provider),
  Consumer = _a.Consumer;
export default RequestNetworkProvider;
