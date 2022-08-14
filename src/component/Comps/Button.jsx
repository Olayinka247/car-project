import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled(Link)`
  background: linear-gradient(to right, #01fb34 0%, #01fb34 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
