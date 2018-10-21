import * as React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IEvent } from "../RequestNetwork";
import { Column } from "src/components/Column";
import Info from "./Info";

interface Props {
  requestsArray: IEvent[];
  isFetching: boolean;
  errorMessage?: string;
}

const ResultsTable = (props: Props) => {
  return (
    <Paper
      style={{
        padding: 20,
        marginLeft: 20,
        maxHeight: 700,
        overflowY: "scroll"
      }}
    >
      <Column>
        <Table style={{ minWidth: 700, maxHeight: 700 }}>
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
        <Info
          isEmpty={props.requestsArray.length === 0}
          isFetching={props.isFetching}
        />
      </Column>
    </Paper>
  );
};

export default ResultsTable;
