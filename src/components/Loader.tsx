import CircularProgress from "@material-ui/core/CircularProgress";
import * as React from "react";
import styled from "styled-components";
import { ColumnCenter } from "./ColumnCenter";

const CenterMargin = styled(ColumnCenter)`
  margin: 20px;
`;

export const Loader = ({ size }: { size?: number }) => {
  return (
    <CenterMargin>
      <CircularProgress size={size ? size : 60} />
    </CenterMargin>
  );
};
