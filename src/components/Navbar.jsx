import React from "react";
import { navLinks } from "../constants/index";

const Navbar = ({ navOpen }) => {
  return (
    <nav className={"navbar " + (navOpen ? "active bg-nav-gradient" : "")}>
      {navLinks.map(({ id, title, href }, key) => (
        <a href={href} key={key} id={id} className="nav-link">
          {title}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
