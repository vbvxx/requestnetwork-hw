import styled, { StyledFunction } from "styled-components";

interface AdditionalProps {
  color?: string;
}
const p: StyledFunction<
  AdditionalProps & React.HTMLProps<HTMLParagraphElement>
> = styled.p;

export const Text = p`
  font-family: "Raleway", sans-serif;
  color: ${props => props.color || "#777"};
`;
