import * as React from "react";
import RequestNetworkProvider from "./Provider";

const ctx = React.createContext({
  isReady: false,
  networkMismatch: false,
  currentNetwork: "",
  currentAccount: "",
  requestNetwork: undefined
});
export const Consumer = ctx.Consumer;
export const Provider = ctx.Provider;
export default RequestNetworkProvider;
