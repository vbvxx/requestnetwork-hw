import * as React from "react";
import { Loader } from "src/components/Loader";
import { Text } from "src/components/Text";
import { Paper } from "@material-ui/core";
import { Label } from "src/components/Label";
import styled from "styled-components";
import { Column } from "src/components/Column";
import { Error } from "src/components/Error";

interface Props {
  inProgress: boolean;
  requestId?: string;
  errorMsg?: string;
}

const CenteredLabel = styled(Label)`
  text-align: center;
`;

export const TransactionInfo: React.SFC<Props> = props => {
  const { requestId, inProgress, errorMsg } = props;
  return (
    <Paper style={{ padding: 20, marginLeft: 20, width: 170 }}>
      <CenteredLabel>{"Transaction status"}</CenteredLabel>
      {requestId === undefined &&
        errorMsg === undefined &&
        inProgress === false && <TransactionEmptyState />}
      {inProgress && <TransactionLoader />}
      {requestId && <Success requestId={requestId} />}
      {errorMsg && <Error errorMsg={errorMsg} />}
    </Paper>
  );
};

const TransactionLoaderContainer = styled(Column)`
  align-items: center;
`;

const TransactionLoader: React.SFC<{}> = props => {
  return (
    <TransactionLoaderContainer>
      <Text>Transaction in progress</Text>
      <Loader />
    </TransactionLoaderContainer>
  );
};

const TransactionEmptyState: React.SFC<{}> = props => {
  return (
    <React.Fragment>
      <Text>Create a new payslip to initiate a transaction.</Text>
    </React.Fragment>
  );
};

const Success: React.SFC<{ requestId: string }> = props => {
  return (
    <React.Fragment>
      <Text color="green">{`Success! Request id: ${props.requestId}`}</Text>
    </React.Fragment>
  );
};
