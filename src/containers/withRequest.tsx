import { Consumer } from "@requestnetwork/react-components";
import * as React from "react";

export interface InjectedRequestProps {
  requestNetworkProps: { [key: string]: any };
  createRequestAsAPayer: () => void;
}

export const withRequest = <P extends InjectedRequestProps>(
  Component: React.ComponentType<P>
) =>
  class WithRequest extends React.Component<InjectedRequestProps> {
    // createRequestAsAPayer = (_payeesIdAddress: string[], amount: ) => {
    //   // this.props.requestNetworkProps.currentAccount;
    //   // this.props.requestNetworkProps.requestNetwork.requestEthereumService.createRequestAsPayee();
    // };

    createRequestAsAPayer = () => {};

    render() {
      return (
        <Consumer>
          {requestNetwork => {
            return (
              <Component
                {...this.props}
                requestNetworkProps={requestNetwork}
                createRequestAsAPayer={this.createRequestAsAPayer}
              />
            );
          }}
        </Consumer>
      );
    }
  };
