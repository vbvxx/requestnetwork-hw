import * as React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  text: string;
}
export const DrawerLabel: React.SFC<Props> = props => (
  <Typography variant="subtitle1" color="inherit" key={props.text}>
    {props.text}
  </Typography>
);
