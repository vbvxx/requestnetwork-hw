import { Button } from "@material-ui/core";
import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {
  path: string;
  onClick?: () => void;
  style?: any;
}

export const OutlinedButtonLink: React.SFC<IProps> = props => {
  const path = props.path;
  // tslint:disable-next-line:no-shadowed-variable
  const renderComponent = ({ innerRef, ...props }: any) => (
    <Link {...props} to={path} />
  );
  return (
    <Button
      component={renderComponent}
      variant="outlined"
      color="primary"
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </Button>
  );
};

export const ButtonLink: React.SFC<IProps> = props => {
  const path = props.path;
  // tslint:disable-next-line:no-shadowed-variable
  const renderComponent = ({ innerRef, ...props }: any) => (
    <Link {...props} to={path} />
  );
  return (
    <Button
      component={renderComponent}
      color="primary"
      fullWidth={true}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </Button>
  );
};
