// import { Consumer } from "@requestnetwork/react-components";
import { Consumer } from "./RequestNetwork/index";
//@ts-ignore
import RequestNetwork, { Types } from "@requestnetwork/request-network.js";
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

    createRequestAsPayer = async (onSuccess: (txhash: string) => void) => {
      console.log(this.requestNetworkInstance);
      console.log(this.requestNetworkInstance.createRequest);
      const { request } = await this.requestNetworkInstance.createRequest(
        Types.Role.Payer,
        Types.Currency.ETH,
        [
          {
            idAddress: "0x6f179c0B2782932AdC62F871023DC14C1F695d91",
            paymentAddress: "0x6f179c0B2782932AdC62F871023DC14C1F695d91",
            expectedAmount: 2000000000,
            amountToPayAtCreation: 2000000000
          }
        ],
        {
          idAddress: "0xdA8fB450D8836E135871008F83369AFe4733e3B8",
          refundAddress: "0xdA8fB450D8836E135871008F83369AFe4733e3B8"
        },
        { gasPrice: "150000000000" }
      );
      console.log(request);
      // onSuccess(transaction.hash);
    };
    // .createRequestAsPayer(
    //   ["0x6f179c0B2782932AdC62F871023DC14C1F695d91"],
    //   [0.01],
    //   undefined,
    //   undefined,
    //   undefined,
    //   JSON.stringify({}),
    //   undefined,
    //   undefined,
    //   { gasPrice: "15000000000" }
    // )
    // .then(({ transaction }: any) => {
    //   onSuccess(transaction.hash);
    // });

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
