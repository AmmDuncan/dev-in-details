import styled from "styled-components";
import { absolutePosition } from "../../styles/mixins";
import { fontSize, media, primary } from "../../styles/utils";
import { Container } from "../../styles/globalStyle";

export const HeroRoot = styled.section`
  position: relative;
  min-height: 55rem;
  padding-top: 72px;
  padding-bottom: 25%;
  color: white;

  .bg {
    ${absolutePosition};
    z-index: -1;
    background: ${(props) => primary(props).main};
    opacity: 0.8;
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);
  }

  &:before {
    ${absolutePosition};
    z-index: -1;
    background: ${(props) => primary(props).main};
    opacity: 0.8;
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 96%);
  }

  &:after {
    ${absolutePosition};
    z-index: -1;
    background: ${(props) => primary(props).main};
    opacity: 0.8;
    clip-path: polygon(0% 0%, 100% 0%, 100% 96%, 0% 90%);
  }

  ${(props) => media(props).above("tabM")} {
    min-height: 48rem;
    padding-bottom: 10%;
    display: grid;
    align-items: center;

    ${Container} {
      display: grid;
      grid: 1fr / 1fr 1fr;
      align-items: center;
    }
  }
`;

export const HeroContent = styled.section`
  padding: 10rem 0 2rem;

  h1 {
    position: relative;
    max-width: 430px;
    font-size: ${(props) => fontSize(props).display};
    letter-spacing: calc(1em * -0.05);

    &:before {
      ${absolutePosition};
      background: #fff;
      width: 56px;
      height: 8px;
      top: -1rem;
    }
  }

  p {
    max-width: 315px;
    padding: 1rem 0 2.5rem;
    font-size: ${(props) => fontSize(props).bodyL};
    line-height: 1.6;
    color: ${(props) => primary(props)[100]};
  }

  ${(props) => media(props).above("mobL")} {
    padding-bottom: 5rem;
  }

  ${(props) => media(props).above("tabM")} {
    padding: 5rem 0;
  }
`;

export const HeroIllustration = styled.section`
  svg {
    width: 100%;
    max-width: 631px;
  }
`;

export const CallToActions = styled.section`
  display: grid;
  grid: 1fr 1fr / 1fr;
  gap: 1rem;

  ${(props) => media(props).above("mobL")} {
    grid: 1fr / repeat(2, max-content);
  }
`;
