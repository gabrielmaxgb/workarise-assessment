import styled from "@emotion/styled";
import { IInputFieldStyled } from "./types";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 1rem 0;
`;

export const InputField = styled.input<IInputFieldStyled>`
  background-color: transparent;
  border: 1px solid ${(props) => props.textColor};
  border-radius: 8px;
  color: ${(props) => props.textColor};
  font-size: 1.5rem;
  padding: 0.5rem;
  outline: none;
  width: 50%;
  margin: 1rem 0;
  /* margin-right: 1rem; */
`;
