import Link from "next/link";
import { MobileNav, NavbarRoot } from "./styles";
import Logo from "../../assets/Logo";
import NavList from "./NavList";
import NavOpener from "./NavOpener";
import { Container } from "../../styles/common";
import { useEffect, useState } from "react";

export const NavBrand = ({ children }) => (
  <Link href="/">
    <a className="navbar-brand">
      {children}
      <span>Dev in Details</span>
    </a>
  </Link>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
  }, [open]);

  return (
    <NavbarRoot>
      <Container>
        <NavBrand>
          <Logo />
        </NavBrand>
        <NavOpener clicked={() => setOpen(true)} />
        <NavList />
      </Container>

      <MobileNav className={open ? "open" : ""} onClick={() => setOpen(false)}>
        <NavList brand={true} />
        <div className="bg" aria-hidden="true" />
      </MobileNav>
    </NavbarRoot>
  );
};

export default Navbar;
