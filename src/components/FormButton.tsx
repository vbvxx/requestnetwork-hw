import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";
import * as React from "react";

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
