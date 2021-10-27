import styled from "styled-components";
import { fontSize, media, primary } from "../../styles/utils";
import { Container } from "../../styles/common";
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
        height: 56px;
        list-style: none;
        color: #fff;
        display: grid;
        grid: 1fr / auto-flow max-content;
        column-gap: 2rem;
      }

      li {
        position: relative;
        display: grid;
        place-content: center;
        transition: 0.1s ease-out;
        cursor: pointer;

        &:after {
          ${absolutePosition};
          top: auto;
          bottom: 0.25rem;
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

      ${media("above", "tabL")} {
        display: grid;
      }
    }
  }
`;

export const MobileNav = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  a {
    display: grid;
    align-items: center;
    grid: 1fr / repeat(2, max-content);
    gap: 1rem;
    padding: 1rem 2rem;

    span {
      font-size: ${fontSize("bodyM")};
      font-weight: 500;
    }
  }

  .bg {
    ${absolutePosition};
    z-index: 5;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(0.25rem);
    transition: 0.3s ease-out;
    opacity: 0;
  }

  nav {
    position: absolute;
    z-index: 50;
    right: -300px;
    width: 85%;
    height: 100vh;
    max-width: 300px;
    background: ${primary(50)};
    transition: 0.15s 0.05s ease-out;
    overflow-y: scroll;
  }

  ul {
    position: absolute;
    z-index: 50;
    display: grid;
    grid: auto-flow 56px / 1fr;
    list-style: none;
    right: 0;
    width: 100%;
    padding: 1rem 0 2rem;
  }

  li {
    border-bottom: 1px solid ${primary(100)}44;

    a {
      display: grid;
      align-items: center;
      padding: 1rem 2rem;
    }

    &:hover {
      background: ${primary(100)}aa;
    }
  }

  &.open {
    pointer-events: all;

    nav {
      right: 0;
    }

    .bg {
      opacity: 1;
    }
  }
`;

export const NavOpenerRoot = styled.article`
  display: grid;
  width: 64px;
  gap: 0.5rem;
  height: 48px;
  align-items: center;
  align-content: center;
  padding: 4px 12px;
  border-radius: 1px;
  cursor: pointer;

  &:hover {
    background: ${primary(600)}39;
  }

  span {
    display: inline-block;
    height: 2px;
    width: 100%;
    background: #fff;
  }

  ${media("above", "tabL")} {
    display: none;
  }
`;
