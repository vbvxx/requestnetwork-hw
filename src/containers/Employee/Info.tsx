import * as React from "react";
import styled from "styled-components";
import { Loader } from "src/components/Loader";
import { Text } from "src/components/Text";

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
}

const Info: React.SFC<Props> = props => {
  const placeHolder =
    props.isEmpty && !props.isFetching ? (
      <Text>{"There is no requests to display"}</Text>
    ) : (
      undefined
    );

  const loader = props.isFetching ? <Loader size={25} /> : undefined;
  return placeHolder !== undefined || loader !== undefined ? (
    <InfoContainer>
      {placeHolder}
      {loader}
    </InfoContainer>
  ) : (
    <React.Fragment />
  );
};

export default Info;
