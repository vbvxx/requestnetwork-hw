import * as React from "react";
import RequestNetworkProvider from "./Provider";
interface ContextValues {
  requestNetwork: any;
  isReady: boolean;
  networkMismatch: boolean;
  currentNetwork: string;
  currentAccount: string;
}
export declare const Provider: React.ComponentType<
    React.ProviderProps<ContextValues>
  >,
  Consumer: React.ComponentType<React.ConsumerProps<ContextValues>>;
export default RequestNetworkProvider;
