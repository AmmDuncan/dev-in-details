import { NavOpenerRoot } from "./styles";

const NavOpener = ({ clicked }) => {
  return (
    <NavOpenerRoot onClick={clicked}>
      <span />
      <span />
      <span />
    </NavOpenerRoot>
  );
};

export default NavOpener;
