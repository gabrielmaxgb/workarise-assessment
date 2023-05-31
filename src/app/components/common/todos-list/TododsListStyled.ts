import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { ITodosListContainer } from "./types";

export const TodosListContainer = styled(Grid)<ITodosListContainer>`
  display: flex;
  flex-direction: column;

  border: ${(props) => `1px solid ${props.borderColor}`};
  border-radius: 8px;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
`;
