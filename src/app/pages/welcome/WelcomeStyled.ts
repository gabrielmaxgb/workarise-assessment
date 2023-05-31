import styled from "@emotion/styled";
import { IWelcomeContainer } from "./types";

export const WelcomeContainer = styled.main<IWelcomeContainer>`
  display: flex;

  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .action-area {
    opacity: 0;
    background-image: ${(props) =>
      `linear-gradient(transparent, ${props.linearGradientColor || "black"})`};
    transition: 1s;

    &:hover {
      transition: 1s;
      opacity: 1;
      background-image: ${(props) =>
        `linear-gradient(transparent, ${
          props.linearGradientColor || "black"
        })`};
    }
  }
`;
