import { createStyles, withStyles, WithStyles } from "@material-ui/core";
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

type Props = IProps & WithStyles<typeof styles>;

const ResultsTable = (props: Props) => {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <Column>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Request Id</TableCell>
              <TableCell className={classes.timeStampCell}>
                Time stamp
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.requestsArray.map(request => {
              return (
                <TableRow key={request.requestId}>
                  <TableCell>{request.requestId}</TableCell>
                  <TableCell className={classes.timeStampCell}>
                    {moment(request._meta.timestamp * 1000).format("LLLL")}
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

const styles = createStyles({
  paper: {
    marginLeft: 20,
    maxHeight: 700,
    overflowY: "scroll",
    padding: 20
  },
  table: {
    minWidth: 700
  },
  timeStampCell: {
    width: 80
  }
});

export default withStyles(styles)(ResultsTable);
