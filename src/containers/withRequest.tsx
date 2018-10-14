import { Consumer } from "@requestnetwork/react-components";
import * as React from "react";

export interface InjectedRequestProps {
  requestNetworkProps: { [key: string]: any };
}

export const withRequest = <P extends InjectedRequestProps>(
  Component: React.ComponentType<P>
) =>
  class WithRequest extends React.Component<P> {
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
