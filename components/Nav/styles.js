import styled from "styled-components";
import { fontSize, media } from "../../styles/utils";
import { Container } from "../../styles/globalStyle";

export const NavbarRoot = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 72px;
  width: 100%;
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
    }

    ${(props) => media(props).above("tabL")} {
      display: block;
    }
  }
`;
