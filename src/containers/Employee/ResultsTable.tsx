import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IEvent } from "../RequestNetwork";
import { RowCenter } from "src/components/RowCenter";
import { Text } from "src/components/Text";
import { Loader } from "src/components/Loader";

interface Props {
  requestsArray: IEvent[];
  isFetching: boolean;
}

const ResultsTable = (props: Props) => {
  const placeHolder =
    props.requestsArray.length === 0 && !props.isFetching ? (
      <RowCenter>
        <Text color={"grey"}>There is no request to display.</Text>
      </RowCenter>
    ) : (
      undefined
    );

  const loader = props.isFetching ? <Loader /> : undefined;

  return (
    <Paper style={{ padding: 20, marginTop: 40 }}>
      <Table style={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell>Request Id</TableCell>
            <TableCell style={{ width: 80 }}>Time stamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.requestsArray.map(request => {
            return (
              <TableRow key={request.requestId}>
                <TableCell>{request.requestId}</TableCell>
                <TableCell style={{ width: 80 }}>
                  {request._meta.timestamp}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <RowCenter>
        {placeHolder}
        {loader}
      </RowCenter>
    </Paper>
  );
};

export default ResultsTable;
