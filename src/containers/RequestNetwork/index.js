import * as React from "react";
import RequestNetworkProvider from "./Provider";

const ctx = React.createContext({
  currentAccount: "",
  currentNetwork: "",
  isReady: false,
  networkMismatch: false,
  requestNetwork: undefined
});
export const Consumer = ctx.Consumer;
export const Provider = ctx.Provider;
export default RequestNetworkProvider;
