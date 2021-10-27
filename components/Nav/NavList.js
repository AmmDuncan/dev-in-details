import Link from "next/link";
import LogoPrimary from "../../assets/LogoPrimary";
import { NavBrand } from "./Navbar";

const NavList = (props) => {
  const { brand } = props;
  return (
    <>
      <nav>
        {brand && (
          <NavBrand>
            <LogoPrimary />{" "}
          </NavBrand>
        )}
        <ul>
          <li>
            <Link href="#">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#what-we-do">
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
    </>
  );
};

export default NavList;
