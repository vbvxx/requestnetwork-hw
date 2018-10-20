import { Consumer, RequestContextValues } from "./index";
import * as React from "react";

export interface InjectedRequestProps {
  requestProps: RequestContextValues;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function withRequest<
  P extends { requestProps: RequestContextValues },
  R = Omit<P, "requestProps">
>(
  Component: React.ComponentClass<P> | React.StatelessComponent<P>
): React.SFC<R> {
  return function withRequest(props: R) {
    return (
      <Consumer>
        {requestNetwork => {
          return <Component {...props} requestProps={requestNetwork} />;
        }}
      </Consumer>
    );
  };
}
