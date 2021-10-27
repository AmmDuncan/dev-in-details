import Link from "next/Link";
import { NavbarRoot } from "./styles";
import { Container } from "../../styles/globalStyle";
import Logo from "../../assets/Logo";

const Navbar = (props) => {
  return (
    <NavbarRoot>
      <Container>
        <Link href="/">
          <a className="navbar-brand">
            <Logo />
            <span>Dev in Details</span>
          </a>
        </Link>
      </Container>
    </NavbarRoot>
  );
};

export default Navbar;
