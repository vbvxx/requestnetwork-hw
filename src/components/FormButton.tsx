import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";
import * as React from "react";

export const FormRaisedButton = (props: ButtonProps) => (
  <Button
    variant="outlined"
    color="primary"
    style={{
      marginBottom: "16px",
      marginTop: "10px",
      width: "100%"
    }}
    {...props}
  >
    {props.children}
  </Button>
);
