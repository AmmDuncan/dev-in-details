import styled from "styled-components";
import { fontSize, media } from "../../styles/utils";
import { Container } from "../../styles/globalStyle";
import { absolutePosition } from "../../styles/mixins";

export const NavbarRoot = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 72px;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-brand {
    display: grid;
    grid: 1fr / repeat(2, max-content);
    column-gap: 1rem;
    align-items: center;
    font-size: ${(props) => fontSize(props)["bodyL"]};
    font-weight: 500;
    color: #fff;
  }

  nav {
    display: none;

    ul {
      list-style: none;
      color: #fff;
      display: grid;
      grid: 1fr / auto-flow max-content;
      column-gap: 2rem;
      align-items: stretch;
    }

    li {
      position: relative;
      transition: 0.1s ease-out;

      &:after {
        ${absolutePosition};
        top: auto;
        bottom: -0.75rem;
        transition: 0.15s ease-out;
        width: 0;
        height: 3px;
        background: #fff;
      }

      &:hover {
        transform: scale(1.05);

        &:after {
          width: 70%;
        }
      }
    }

    ${(props) => media(props).above("tabL")} {
      display: block;
    }
  }
`;
