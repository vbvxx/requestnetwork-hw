import styled, { StyledFunction } from "styled-components";

interface AdditionalProps {
  border?: string;
}
const input: StyledFunction<
  AdditionalProps & React.HTMLProps<HTMLInputElement>
> = styled.input;

export const Input = input`
  width: 300px;
  height: 35px;
  border: ${props => (props as any).border || "1px solid #ccc"};
  background-color: #fff;
`;
