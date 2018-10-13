import { Consumer } from "@requestnetwork/react-components";
import { Subtract } from "utility-types";
import * as React from "react";

export interface InjectedRequestProps {
  requestNetworkProps: any;
}

export const withRequest = <P extends InjectedRequestProps>(
  Component: React.ComponentType<P>
) =>
  class WithLoading extends React.Component<Subtract<P, InjectedRequestProps>> {
    render() {
      return (
        <Consumer>
          {requestNetwork => {
            return (
              <Component {...this.props} requestNetworkProps={requestNetwork} />
            );
          }}
        </Consumer>
      );
    }
  };
