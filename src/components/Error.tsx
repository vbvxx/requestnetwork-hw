import * as React from "react";
import { Text } from "./Text";

export const Error: React.SFC<{ errorMsg: string }> = props => {
  return <Text color="red">{props.errorMsg}</Text>;
};
