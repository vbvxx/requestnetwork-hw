import { Consumer } from "@requestnetwork/react-components";
import * as React from "react";

export interface InjectedRequestProps {
  requestNetworkProps: { [key: string]: any };
  createRequestAsPayer: (onSuccess: (txhash: string) => void) => void;
}

export interface State {
  requestNetworkProps?: any;
}

export const withRequest = <P extends InjectedRequestProps>(
  Component: React.ComponentType<P>
) =>
  class WithRequest extends React.Component<P, State> {
    private requestNetworkInstance?: any;

    createRequestAsPayer = (onSuccess: (txhash: string) => void) => {
      this.requestNetworkInstance.requestEthereumService
        .createRequestAsPayer(
          ["0x6f179c0B2782932AdC62F871023DC14C1F695d91"],
          [0.01],
          undefined,
          undefined,
          undefined,
          JSON.stringify({}),
          undefined,
          undefined,
          { gasPrice: "15000000000" }
        )
        .then(({ transaction }: any) => {
          onSuccess(transaction.hash);
        });
    };

    render() {
      return (
        <Consumer>
          {requestNetwork => {
            this.requestNetworkInstance = requestNetwork.requestNetwork;
            return (
              <Component
                {...this.props}
                requestNetworkProps={requestNetwork}
                createRequestAsPayer={this.createRequestAsPayer}
              />
            );
          }}
        </Consumer>
      );
    }
  };
