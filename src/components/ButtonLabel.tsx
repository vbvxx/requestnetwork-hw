import * as React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  text: string;
  color?: string;
}
export const SubtitleLabel: React.SFC<Props> = props => (
  <Typography
    variant="subtitle1"
    color="inherit"
    style={props.color ? { color: props.color } : undefined}
  >
    {props.text}
  </Typography>
);
