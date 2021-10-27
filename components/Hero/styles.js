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
  padding: 7rem 0 3.5rem;

  h1 {
    position: relative;
    max-width: 430px;
    font-size: ${(props) => fontSize(props).display};
    font-weight: 800;
    letter-spacing: calc(1em * -0.06);

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
  position: relative;
  margin-bottom: 4rem;

  svg {
    width: 100%;
    max-width: 631px;
  }

  .highlight {
    position: absolute;
    display: grid;
    grid: 1fr / repeat(2, max-content);
    column-gap: 12px;
    align-items: center;
    padding: 8px 24px;
    box-shadow: 0 6px 0 rgba(30, 50, 150, 0.15);
    border-radius: 10rem;
    background: ${(props) => primary(props)[400]};
    font-size: 12px;

    &:first-of-type {
      column-gap: 0;
      bottom: 14%;
      left: -3%;
      padding: 16px 24px;

      svg {
        position: absolute;
        top: -16px;
      }

      span {
        display: inline-block;
        margin-left: 2rem;
      }
    }

    &:nth-last-of-type(2) {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    &:last-of-type {
      bottom: 19%;
      right: -4%;
    }

    ${(props) => media(props).below("mobL")} {
      display: none;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1008px) {
    margin-bottom: 0;

    .highlight {
      &,
      &:first-of-type {
        //right: 0;
        left: 50%;
        transform: translateX(-50%);
        width: max-content;
      }

      &:first-of-type {
        bottom: 20%;
      }

      &:nth-last-of-type(2) {
        bottom: calc(20% - 64px);
      }

      &:nth-last-of-type(3) {
        bottom: calc(20% - 128px);
      }
    }
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
