import * as React from "react";

export const Success = ({ txHash }: { txHash: string }) => {
  return (
    <React.Fragment>
      <p>Success!</p>
      <p>TxHash: {txHash}</p>
    </React.Fragment>
  );
};
