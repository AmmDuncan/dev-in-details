import styled from "styled-components";
import { absolutePosition } from "../../styles/mixins";
import { fontSize, grey, media, primary } from "../../styles/utils";
import { Button } from "../Button/Button";

export const BlueButton = styled(Button)`
  background: ${primary(500)};
  color: white;

  span {
    margin-right: 8px;
  }
`;

export const ContactUsRoot = styled.section`
  position: relative;
  margin-top: -12rem;
  padding: 16rem 0 12rem;
  text-align: center;

  h2 {
    position: relative;
    font-size: ${fontSize("heading2")};
    font-weight: 700;
    line-height: 1;
    letter-spacing: calc(1em * -0.05);

    &:before {
      ${absolutePosition};
      height: 8px;
      width: 56px;
      background: ${grey(900)};
      top: -1.5rem;
      left: 50%;
      transform: translateX(-50%);
    }

    ${media("above", "mobL")} {
      font-size: ${fontSize("heading1")};
    }
  }

  p {
    color: ${grey(700)};
    font-size: ${fontSize("bodyM")};
    max-width: 350px;
    margin: 20px auto;
    line-height: 1.5;
  }

  &:before {
    ${absolutePosition};
    z-index: -1;
    background: ${primary(50)};
    opacity: 0.9;
    clip-path: polygon(0% 12%, 14.45% 4%, 100% 12%, 100% 100%, 0% 100%);
  }

  &:after {
    ${absolutePosition};
    z-index: -1;
    background: ${primary(50)};
    opacity: 0.9;
    clip-path: polygon(0% 12%, 36.66% 2%, 100% 12%, 100% 100%, 0% 100%);
  }

  .illustration {
    display: none;
  }

  ${media("above", "desksM")} {
    .form-container {
      display: grid;
      grid: 1fr / 384px auto;
      justify-content: center;
    }

    .illustration {
      display: block;
    }
  }

  ${BlueButton} {
    margin-top: 16px;
  }

  form {
    display: grid;
    grid: repeat(4, auto) / 1fr;
    row-gap: 24px;
    width: 90%;
    max-width: 386px;
    margin: 44px auto 0;

    div {
      display: flex;
      flex-flow: column;
      align-items: start;
    }

    input,
    textarea {
      padding: 16px 8px;
      border: none;
      box-shadow: 0 4px 4px rgba(30, 50, 150, 0.05);
      width: 100%;
      margin-top: 4px;
      font-size: 100%;
    }
  }
`;
