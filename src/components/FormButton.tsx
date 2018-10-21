import styled from "styled-components";
import * as React from "react";
import { Button } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";

export const FormButton = styled.button`
  width: 100%;
  height: 35px;
  background-color: #00008b;
  color: #fff;
  border-radius: 3px;
  margin: 0.5em 0;
`;

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
