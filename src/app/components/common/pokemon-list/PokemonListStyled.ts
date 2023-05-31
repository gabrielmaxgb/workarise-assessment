import styled from "@emotion/styled";
import { IPokemonListContainer } from "./types";

export const PokemonListContainer = styled.div<IPokemonListContainer>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 85%;
  box-sizing: border-box;

  .list-arrow {
    background-color: ${(props) => props.arrowButtonColor};
    padding: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;
