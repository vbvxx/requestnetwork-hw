import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

interface Props {
  path: string;
  onClick?: () => void;
  style?: any;
}

export const OutlinedButtonLink: React.SFC<Props> = props => {
  const path = props.path;
  return (
    <Button
      component={({ innerRef, ...props }) => <Link {...props} to={path} />}
      variant="outlined"
      color="primary"
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </Button>
  );
};

export const ButtonLink: React.SFC<Props> = props => {
  const path = props.path;
  return (
    <Button
      component={({ innerRef, ...props }) => <Link {...props} to={path} />}
      color="primary"
      fullWidth={true}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </Button>
  );
};
