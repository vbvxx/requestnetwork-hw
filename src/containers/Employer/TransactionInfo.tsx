import { Paper } from "@material-ui/core";
import * as React from "react";
import { Column } from "src/components/Column";
import { Error } from "src/components/Error";
import { Label } from "src/components/Label";
import { Loader } from "src/components/Loader";
import { Text } from "src/components/Text";
import styled from "styled-components";

interface IProps {
  inProgress: boolean;
  requestId?: string;
  errorMsg?: string;
}

const CenteredLabel = styled(Label)`
  text-align: center;
`;

export const TransactionInfo: React.SFC<IProps> = props => {
  const { requestId, inProgress, errorMsg } = props;
  // TODO: use withStyles
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

const TransactionLoader = () => {
  return (
    <TransactionLoaderContainer>
      <Text>Transaction in progress</Text>
      <Loader />
    </TransactionLoaderContainer>
  );
};

const TransactionEmptyState = () => {
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
