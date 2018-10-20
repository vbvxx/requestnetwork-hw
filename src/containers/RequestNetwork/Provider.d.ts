import * as React from "react";
import { IEvent } from ".";

interface IProps {
  onInit: () => void;
}
export declare class RequestNetworkProvider extends React.Component<IProps> {
  state: {
    requestNetwork: undefined;
    currentAccount: string;
    currentNetwork: string;
    isReady: boolean;
    createRequestAsAPayer(
      paymentAddress: string,
      amount: string
    ): Promise<string>;
    getRequestByAddress(address: string): Promise<IEvent[]>;
  };
  private initRequestProvider;
  initWeb3(): Promise<void>;
  fetchAccounts: () => Promise<void>;
  componentDidMount(): void;
  componentDidUpdate(
    {
      onInit
    }: {
      onInit: any;
    },
    prevState: any
  ): void;
  render(): JSX.Element | null;
}
export default RequestNetworkProvider;
