import React from "react";
import { navLinks } from "../constants/index";

const Navbar = ({ navOpen }) => {
  return (
    <nav className={"navbar " + (navOpen ? "active bg-nav-gradient" : "")}>
      {navLinks.map(({ id, title, href }) => (
        <a href={href} key={id} className="nav-link ">
          {title}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
