import styled from "styled-components";
import { fontSize, grey, media, primary } from "../../styles/utils";
import { absolutePosition } from "../../styles/mixins";

export const OurProcessRoot = styled.section`
  padding: 4rem 0 9rem;

  header {
    max-width: 486px;

    ${media("above", "tabL")} {
      width: 50%;
    }
  }
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
      left: 0;
    }

    ${media("above", "mobL")} {
      font-size: ${fontSize("heading1")};
    }
  }

  p {
    margin-top: 20px;
    font-size: ${fontSize("bodyM")};
    color: ${grey(700)};
    line-height: 1.5;
  }
`;

export const CardRoot = styled.article`
  position: relative;
  padding: 48px 32px 48px 48px;
  box-shadow: 0 16px 48px ${primary(900)}22;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 486px;
  color: ${grey(600)};
  background: #fff;

  .bg {
    ${absolutePosition};
    width: 35px;
    z-index: 1;
    background: ${primary("main")};
    opacity: 0.6;
    clip-path: polygon(0% 0%, 11% 0%, 100% 82%, 33% 100%, 0% 100%);
  }

  &:before {
    ${absolutePosition};
    width: 35px;
    z-index: 1;
    background: ${primary("main")};
    opacity: 0.6;
    clip-path: polygon(0% 0%, 11% 0%, 85% 92%, 33% 100%, 0% 100%);
  }

  &:after {
    ${absolutePosition};
    width: 35px;
    z-index: 1;
    background: ${primary("main")};
    opacity: 0.6;
    clip-path: polygon(0% 0%, 11% 0%, 61% 100%, 33% 100%, 0% 100%);
  }

  p {
    margin: 8px 0;
    font-size: ${fontSize("body")};
  }

  h3 {
    position: relative;
    &.optional {
      :before {
        ${absolutePosition};
        content: "(optional)";
        left: 0;
        top: -14px;
        letter-spacing: 0;
        font-size: ${fontSize("bodyS")};
        color: ${grey(400)};
        font-weight: 400;
      }
    }
  }
`;

export const LineLink = styled.div`
  position: relative;
  border-top: 2px dashed ${primary(100)};
  width: 120%;
  z-index: 0;
  //left: -16px;
`;

export const Bullet = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  background: ${primary(500)};
  border-radius: 50%;
  z-index: 2;
  //left: -16px;

  &::after {
    ${absolutePosition};
    height: 20px;
    width: 20px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Steps = styled.div`
  margin-top: 3rem;
  display: grid;
  grid: auto-flow max-content / auto;
  row-gap: 48px;

  .step {
    position: relative;
    display: grid;
    grid: 1fr / max-content 10% auto;
    align-items: center;
    width: 100%;

    &:not(:last-child, :nth-child(4)) {
      &:after {
        ${absolutePosition};
        width: 4px;
        background: ${grey(100)};
        height: 120%;
        top: 50%;
        left: 14px;
        //left: -2px;
        z-index: 0;
      }
    }

    &:last-child {
      &:after {
        ${absolutePosition};
        width: 4px;
        background: ${grey(100)};
        height: 120%;
        top: auto;
        bottom: 50%;
        left: 14px;
        //left: -2px;
        z-index: 0;
      }
    }
  }

  ${media("above", "tabL")} {
    margin-top: -5rem;
    grid: auto-flow max-content / 1fr 1fr;

    ${LineLink} {
      left: -16px;
    }

    .step {
      &:not(:last-child, :nth-child(4)) {
        &:after {
          left: -2px;
        }

        ${Bullet} {
          left: -16px;
        }
      }

      &:nth-child(1) {
        grid-area: 1/2/2/3;
      }

      &:nth-child(2) {
        grid-area: 2/1/3/2;
      }

      &:nth-child(3) {
        grid-area: 3/2/4/3;
      }

      &:nth-child(4) {
        grid-area: 4/1/5/2;
      }

      &:nth-child(5) {
        grid-area: 5/2/6/3;
      }

      &:nth-child(2n + 2) {
        grid: 1fr / auto 10% max-content;

        ${CardRoot} {
          grid-area: 1/1/2/2;
          width: 100%;
          padding: 48px 48px 48px 32px;

          &:after,
          &:before,
          .bg {
            transform: rotateY(180deg);
            left: auto;
            right: 0;
          }
        }
        ${LineLink} {
          grid-area: 1/2/2/3;
          width: 150%;
          left: -16px;
        }

        ${Bullet} {
          right: -16px;
        }

        &:after {
          right: -2px;
          left: auto;
        }

        ${Bullet} {
          left: auto;
          right: -16px;
        }
      }

      &:last-child {
        &:after {
          left: -2px;
        }

        ${Bullet} {
          left: -16px;
        }
      }
    }
  }
`;
