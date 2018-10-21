import * as React from "react";
import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";

export const FormRaisedButton = (props: ButtonProps) => (
  <Button
    variant="outlined"
    color="primary"
    style={{
      width: "100%",
      marginTop: "10px",
      marginBottom: "16px"
    }}
    {...props}
  >
    {props.children}
  </Button>
);
