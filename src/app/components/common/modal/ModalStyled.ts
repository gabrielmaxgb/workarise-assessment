import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { IModalContentStyled } from "./types";

export const ModalContent = styled(Box)<IModalContentStyled>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  background-color: black;
  border: ${(props) => `2px solid ${props.modalMainColor}`};
  border-radius: 8px;
  box-shadow: 24;
  padding: 1.5rem;
`;
