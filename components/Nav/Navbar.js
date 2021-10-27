import Link from "next/link";
import { NavbarRoot } from "./styles";
import { Container } from "../../styles/globalStyle";
import Logo from "../../assets/Logo";

const Navbar = () => {
  return (
    <NavbarRoot>
      <Container>
        <Link href="/">
          <a className="navbar-brand">
            <Logo />
            <span>Dev in Details</span>
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="#">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Our process</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Products</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </NavbarRoot>
  );
};

export default Navbar;
