import * as React from "react";
import RequestNetworkProvider from "./Provider";
export interface RequestContextValues {
  requestNetwork: any;
  isReady: boolean;
  networkMismatch: boolean;
  currentNetwork: string;
  currentAccount: string;
  createRequestAsAPayer(paymentAddress: string, amount: string): string;
}
export declare const Provider: React.ComponentType<
    React.ProviderProps<RequestContextValues>
  >,
  Consumer: React.ComponentType<React.ConsumerProps<RequestContextValues>>;
export default RequestNetworkProvider;
