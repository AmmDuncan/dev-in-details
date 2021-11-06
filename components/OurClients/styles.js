import styled from "styled-components";
import { fontSize, grey, media, primary } from "../../styles/utils";
import { absolutePosition } from "../../styles/mixins";

export const Testimonial = styled.article`
  background: #6987f2;
  margin-top: 4rem;
  box-shadow: 0 4px 12px rgba(0,0,0,.1);

  .content {
    padding: 74px 2rem 58px;
    color: white;
    font-size: ${fontSize("bodyL")};
    line-height: 1.5;

    p {
      position: relative;
      max-width: 394px;
      margin: auto;
      color: white;

      &::before {
        ${absolutePosition};
        content: "“";
        top: -152px;
        left: -8px;
        font-size: 200px;
        font-family: "overpass", sans-serif;
        opacity: 1;
        color: white;
      }
    }
  }

  .profile {
    padding: 1.5rem 2rem;
    background: ${primary(500)}64;

    .container {
      display: flex;
      align-items: center;
      max-width: 394px;
      margin: auto;
    }

    .image {
      width: 64px;
      height: 64px;
      background: #ccc;
      border-radius: 50%;
      margin-right: 18px;
    }

    .text {
      display: flex;
      flex-flow: column;

      p {
        margin: 0;
        font-size: 16px;

        &.name {
          font-weight: 600;
          color: white;
          line-height: 1.4;
        }
      }
    }
    }
}
`;

export const OurClientsRoot = styled.section`
  position: relative;
  padding: 22.375rem 0 280px;

  header {
    max-width: 389px;
  }

  h2 {
    position: relative;
    font-size: ${fontSize("heading2")};
    font-weight: 700;
    line-height: 1;
    letter-spacing: calc(1em * -0.05);
    color: white;

    &:before {
      ${absolutePosition};
      height: 8px;
      width: 56px;
      background: #fff;
      top: -1.5rem;
      left: 0;
    }

    ${media("above", "mobL")} {
      font-size: ${fontSize("heading1")};
    }
  }

  p {
    max-width: 384px;
    margin-top: 20px;
    font-size: ${fontSize("bodyM")};
    color: ${primary(100)};
    line-height: 1.5;
  }

  .bg {
    ${absolutePosition};
    z-index: -1;
    background: ${primary("main")};
    opacity: 0.8;
    clip-path: polygon(0% 24%, 15.42% 8%, 100% 24%, 100% 100%, 0% 100%);
  }

  &:before {
    ${absolutePosition};
    z-index: -1;
    background: ${primary("main")};
    opacity: 0.8;
    clip-path: polygon(0% 24%, 75% 9.3%, 100% 24%, 100% 100%, 0% 100%);
  }

  &:after {
    ${absolutePosition};
    z-index: -1;
    background: ${primary("main")};
    opacity: 0.8;
    clip-path: polygon(0% 24%, 93.6% 13.8%, 100% 24%, 100% 100%, 0% 100%);
  }

  ${media("above", "tabL")} {
    & > * {
      display: grid;
      grid: 1fr / max-content auto;
      column-gap: 2rem;
      column-gap: min(7.75rem, 6vw);
    }

    ${Testimonial} {
      margin-top: 0;
    }

    .bg {
      clip-path: polygon(0% 24%, 15.42% 0%, 100% 24%, 100% 100%, 0% 100%);
    }
  }
`;
