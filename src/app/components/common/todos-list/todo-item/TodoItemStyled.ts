import styled from "@emotion/styled";
import { ITodoItemContainerStyled } from "./types";

export const TodoItemContainer = styled.div<ITodoItemContainerStyled>`
  display: flex;
  align-items: center;
  justify-content: start;

  padding: 0 1rem;
  width: 100%;
  border: ${(props) => `1px solid ${props.borderColor}`};
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
`;
