import * as React from "react";
import RequestNetworkProvider from "./Provider";

export interface IEvent {
  _meta: { blockNumber: number; logIndex: number; timestamp: number };
  requestId: string;
}

export interface RequestContextValues {
  requestNetwork: any;
  isReady: boolean;
  networkMismatch: boolean;
  currentNetwork: string;
  currentAccount: string;
  createRequestAsAPayer(
    paymentAddress: string,
    amount: string
  ): Promise<string>;
  getRequestByAddress(address: string): Promise<IEvent[]>;
}
export declare const Provider: React.ComponentType<
    React.ProviderProps<RequestContextValues>
  >,
  Consumer: React.ComponentType<React.ConsumerProps<RequestContextValues>>;
export default RequestNetworkProvider;
