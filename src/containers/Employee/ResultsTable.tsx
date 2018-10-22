import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// @ts-ignore
import moment from "moment";
import * as React from "react";
import { Column } from "src/components/Column";
import { IEvent } from "../RequestNetwork";
import Info from "./Info";

interface IProps {
  requestsArray: IEvent[];
  isFetching: boolean;
  errorMessage?: string;
}

const ResultsTable = (props: IProps) => {
  // TODO: Use withStyles
  return (
    <Paper
      style={{
        marginLeft: 20,
        maxHeight: 700,
        overflowY: "scroll",
        padding: 20
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
                    {moment(request._meta.timestamp).format("LLLL")}
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
