import styled from "styled-components";
import { fontSize } from "../../styles/utils";

export const NavbarRoot = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;

  .navbar-brand {
    display: grid;
    grid: 1fr / repeat(2, max-content);
    column-gap: 1rem;
    align-items: center;
    font-size: ${(props) => fontSize(props)["bodyL"]};
    font-weight: 500;
    color: #fff;
  }
`;
