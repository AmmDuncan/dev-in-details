import styled from "styled-components";
import { fontSize, grey, media, primary } from "../../styles/utils";
import { absolutePosition } from "../../styles/mixins";

export const WhatWeDoRoot = styled.section`
  padding: 9rem 0;

  header {
    text-align: center;

    h2 {
      position: relative;
      font-size: ${fontSize("heading1")};
      font-weight: 700;
      line-height: 1;
      letter-spacing: calc(1em * -0.05);

      &:before {
        ${absolutePosition};
        height: 8px;
        width: 56px;
        background: ${grey(800)};
        top: -1.5rem;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    p {
      max-width: 408px;
      margin: 2rem auto 3.875rem;
      font-size: ${fontSize("bodyM")};
      color: ${grey(700)};
      line-height: 1.5;
    }
  }
`;

export const CardContainer = styled.section`
  display: grid;
  grid: auto-flow 1fr / auto;
  justify-content: center;
  justify-items: center;
  row-gap: 2.5rem;

  ${media("above", "tabM")} {
    grid: auto-flow 1fr / repeat(2, 1fr);
    column-gap: 1.5rem;
    row-gap: 3rem;

    & > *:last-child {
      grid-column: span 2;
    }
  }

  ${media("above", "deskS")} {
    grid: 1fr / repeat(3, 1fr);
    column-gap: 1.5rem;

    & > *:last-child {
      grid-column: span 1;
    }
  }
`;

export const CardRoot = styled.article`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 16px 38px rgba(6, 11, 41, 0.05);
  max-width: 384px;

  header {
    position: relative;
    min-height: 10rem;
    display: grid;
    justify-content: center;
    padding: 40px 2.5rem 0;
    font-size: 1.5rem;
    letter-spacing: calc(1em * -0.04);
    color: #fff;
    line-height: 1.3;
    font-family: "overpass", "Segoe UI", "helvetica", sans-serif;

    .bg {
      ${absolutePosition};
      z-index: -1;
      background: ${primary("main")};
      opacity: 0.6;
      clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 56.72% 100%, 0% 75%);
    }

    &:before {
      ${absolutePosition};
      z-index: -1;
      background: ${primary("main")};
      opacity: 0.6;
      clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 76.88% 100%, 0% 75%);
    }

    &:after {
      ${absolutePosition};
      z-index: -1;
      background: ${primary("main")};
      opacity: 0.6;
      clip-path: polygon(0% 0%, 100% 0%, 100% 91.25%, 0% 75%);
    }
  }

  p {
    max-width: 288px;
    margin: 48px auto 72px;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    box-sizing: content-box;
    line-height: 1.6;
  }

  ${media("above", "deskS")} {
    max-width: 100%;
    //min-width: 384px;
  }
`;
