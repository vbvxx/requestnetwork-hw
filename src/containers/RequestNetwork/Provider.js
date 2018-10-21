import * as React from "react";
import { Provider } from ".";
import { request } from "http";
import * as Web3 from "web3";
import RequestNetwork, { Types } from "@requestnetwork/request-network.js";

const getNetwork = networkName => {
  switch (networkName) {
    case "rinkeby":
      return 4;
    case "main":
      return 1;
    default:
      return 4;
  }
};

const INFURA_NODE = {
  1: "https://mainnet.infura.io/BQBjfSi5EKSCQQpXebO",
  4: "https://rinkeby.infura.io/BQBjfSi5EKSCQQpXebO"
};

const NETWORK_NAME = process.env.REACT_APP_NETWORK;
const networkId = getNetwork(NETWORK_NAME);

class RequestNetworkProvider extends React.Component {
  state = {
    requestNetwork: undefined,
    currentAccount: ""
  };

  createRequestAsAPayer = async (paymentAddress, amount) => {
    const amountWei = Web3.utils.toWei(amount);
    try {
      const { request } = await this.state.requestNetwork.createRequest(
        Types.Role.Payer,
        Types.Currency.ETH,
        [
          {
            idAddress: paymentAddress,
            paymentAddress: paymentAddress,
            expectedAmount: amountWei,
            amountToPayAtCreation: amountWei
          }
        ],
        {
          idAddress: this.state.currentAccount,
          refundAddress: this.state.currentAccount
        },
        { gasPrice: "300000000000000" }
      );
      return request.requestId;
    } catch (err) {
      throw err;
    }
  };

  getRequestByAddress = async address => {
    try {
      const requests = await this.state.requestNetwork.requestCoreService.getRequestsByAddress(
        address
      );
      return requests.asPayee;
    } catch (err) {
      throw err;
    }
  };

  initRequestProvider(web3, networkId, network) {
    import("@requestnetwork/request-network.js")
      .then(RequestNetwork => {
        return this.setState({
          requestNetwork: new RequestNetwork.default(
            web3.currentProvider,
            networkId
          ),
          currentNetwork: network
        });
      })
      .catch(e => console.error(e));
  }

  async initWeb3() {
    if (typeof window.web3 !== "undefined") {
      const web3 = new Web3(window.web3.currentProvider);
      const network = await web3.eth.net.getNetworkType();
      this.initRequestProvider(web3, networkId, network);
    } else {
      const web3 = new Web3(
        new Web3.providers.HttpProvider(INFURA_NODE[networkId])
      );
      const network = await web3.eth.net.getNetworkType();
      this.initRequestProvider(web3, networkId, network);
    }
  }

  fetchAccounts = async () => {
    if (typeof window.web3 !== "undefined") {
      const web3 = new Web3(window.web3.currentProvider);
      const { currentAccount } = this.state;
      const account = await web3.eth.getAccounts();
      if (account.length > 0 && currentAccount === "") {
        return this.setState({ currentAccount: account[0] });
      }
      if (currentAccount !== account[0]) {
        return this.setState({ currentAccount: account[0] });
      }
    }
  };

  componentDidMount() {
    this.initWeb3();
    this.fetchAccounts();
  }

  componentDidUpdate({ onInit }, prevState) {
    if (prevState.requestNetwork === undefined && this.state.requestNetwork) {
      onInit();
    }
  }

  render() {
    const { requestNetwork, currentNetwork, currentAccount } = this.state;
    if (!requestNetwork) {
      return null;
    }
    return (
      <Provider
        value={{
          requestNetwork: requestNetwork,
          isReady: true,
          currentNetwork: currentNetwork,
          currentAccount: currentAccount,
          networkMismatch: NETWORK_NAME === currentNetwork,
          createRequestAsAPayer: this.createRequestAsAPayer,
          getRequestByAddress: this.getRequestByAddress
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default RequestNetworkProvider;
