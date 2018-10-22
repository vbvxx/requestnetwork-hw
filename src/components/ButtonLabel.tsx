import { Typography } from "@material-ui/core";
import * as React from "react";

interface IProps {
  text: string;
  color?: string;
}
export const SubtitleLabel: React.SFC<IProps> = props => (
  <Typography
    variant="subtitle1"
    color="inherit"
    style={props.color ? { color: props.color } : undefined}
  >
    {props.text}
  </Typography>
);
