import styled, { StyledFunction } from "styled-components";

interface AdditionalProps {
  color?: string;
}
const p: StyledFunction<
  AdditionalProps & React.HTMLProps<HTMLParagraphElement>
> = styled.p;

export const Text = p`
  display:block;
  maxWidth:150px;
  word-wrap:break-word;
  font-family: "Raleway", sans-serif;
  color: ${props => props.color || "#777"};
`;
