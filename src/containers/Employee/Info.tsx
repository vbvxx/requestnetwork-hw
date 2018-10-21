import * as React from "react";
import styled from "styled-components";
import { Loader } from "src/components/Loader";
import { Text } from "src/components/Text";
import { Error } from "src/components/Error";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 129px;
`;

interface Props {
  isFetching: boolean;
  isEmpty: boolean;
  errorMsg?: string;
}

const Info: React.SFC<Props> = props => {
  const { isFetching, isEmpty, errorMsg } = props;
  const placeHolder =
    isEmpty && !isFetching ? (
      <Text>{"There is no requests to display"}</Text>
    ) : (
      undefined
    );
  const loader = isFetching ? <Loader /> : undefined;
  const error = errorMsg ? <Error errorMsg={errorMsg} /> : undefined;

  return placeHolder !== undefined || loader !== undefined ? (
    <InfoContainer>
      {placeHolder}
      {loader}
      {error}
    </InfoContainer>
  ) : (
    <React.Fragment />
  );
};

export default Info;
