import * as React from "react";
import { Text } from "src/components/Text";

export const Success = ({ requestId }: { requestId: string }) => {
  return (
    <React.Fragment>
      <Text color="green">Success!</Text>
      <Text color="green">TxHash: {requestId}</Text>
    </React.Fragment>
  );
};
