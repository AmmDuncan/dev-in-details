import styled from "styled-components";
import { absolutePosition } from "../../styles/mixins";
import { fontSize, media, primary } from "../../styles/utils";
import { Container } from "../../styles/common";

export const HeroRoot = styled.section`
  position: relative;
  min-height: 55rem;
  padding-top: 88px;
  padding-bottom: 25%;
  color: white;

  .bg {
    ${absolutePosition};
    z-index: -1;
    background: ${primary("main")};
    opacity: 0.8;
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%);
  }

  &:before {
    ${absolutePosition};
    z-index: -1;
    background: ${primary("main")};
    opacity: 0.8;
    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 96%);
  }

  &:after {
    ${absolutePosition};
    z-index: -1;
    background: ${primary("main")};
    opacity: 0.8;
    clip-path: polygon(0% 0%, 100% 0%, 100% 96%, 0% 90%);
  }

  ${media("above", "tabM")} {
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
    font-size: calc(${fontSize("heading2")} + 8px);
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
    font-size: ${fontSize("bodyL")};
    line-height: 1.6;
    color: ${primary(100)};
  }

  ${media("above", "mobL")} {
    padding-bottom: 5rem;

    h1 {
      font-size: ${fontSize("display")};
    }
  }

  ${media("above", "tabM")} {
    padding: 4rem 0;
  }
`;

export const HeroIllustration = styled.section`
  position: relative;
  margin-bottom: 4rem;
  min-height: 40rem;
  display: flex;
  justify-content: center;

  svg {
    width: 100%;
    max-width: 631px;
    margin: auto;
  }

  .highlight {
    position: absolute;
    display: grid;
    grid: 1fr / max-content min-content;
    column-gap: 12px;
    align-items: center;
    padding: 16px 24px;
    box-shadow: 0 6px 0 rgba(30, 50, 150, 0.15);
    border-radius: 10rem;
    background: ${primary(400)};
    font-size: 12px;
    width: max-content;

    svg {
      position: absolute;
      left: 16px;
    }

    span {
      display: inline-block;
      margin-left: 2rem;
    }

    &:first-of-type {
      column-gap: 0;
      bottom: 14%;
      left: -3%;
      padding: 16px 24px;

      svg {
        position: absolute;
        top: -16px;
        left: 0;
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

    ${media("below", "mobL")} {
      display: none;
    }
  }

  ${media("above", "tabM")} {
    min-height: 20rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1008px) {
    margin-bottom: 0;

    .highlight {
      &,
      &:first-of-type {
        //right: 0;
        padding: 12px 24px;
        left: 50%;
        transform: translateX(-50%);
        background: ${primary(400)}ea;
        font-size: 11px;
      }

      &:first-of-type {
        bottom: 0.5rem;
      }

      &:nth-last-of-type(2) {
        bottom: 3.5rem;
      }

      &:last-of-type {
        bottom: 6.5rem;
      }
    }
  }
`;

export const CallToActions = styled.section`
  display: grid;
  grid: 1fr 1fr / 1fr;
  gap: 1rem;

  ${media("above", "mobL")} {
    grid: 1fr / repeat(2, max-content);
  }
`;
