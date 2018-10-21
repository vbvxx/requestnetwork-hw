import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export const OutlinedButtonLink = ({
  path,
  name
}: {
  path: string;
  name: string;
}) => {
  return (
    <Button
      component={({ innerRef, ...props }) => <Link {...props} to={path} />}
      variant="outlined"
      color="primary"
      style={{ margin: 50 }}
    >
      {name}
    </Button>
  );
};
