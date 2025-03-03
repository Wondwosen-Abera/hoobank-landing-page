import { useState } from "react";
import { logo, menu, close } from "../assets/index";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="text-dim-white container mx-auto">
      <div className="flex justify-between items-start py-[20px] px-8 sm:pl-[30px] sm:py-[30px] xl:mx-[135px]">
        <a href="#" className="">
          <img src={logo} alt="logo" className="w-32" />
        </a>
        <div className="relative md:justify-self-center">
          <button
            className="sm:hidden cursor-pointer"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <img
              src={navOpen ? close : menu}
              alt="menu"
              className="w-8 mt-2 ml-auto"
            />
          </button>
          <Navbar navOpen={navOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
