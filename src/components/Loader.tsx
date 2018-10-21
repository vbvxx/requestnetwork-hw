import * as React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ColumnCenter } from "./ColumnCenter";
import styled from "styled-components";

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
