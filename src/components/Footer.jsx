import React from "react";
import { logo } from "../assets/index";
import { footerLinks, socialMedia } from "../constants/index";
const Footer = () => {
  return (
    <footer className="footer px-6 sm:px-20 mt-24 md:mt-32 mb-[100px]">
      <div className="flex flex-col gap-0">
        <div className="grid grid-cols-3 gap-12 sm:grid-cols-4 sm:gap-16 md:grid-cols-5 md:gap-24 mb-12 sm:mb-24]">
          <div className="flex flex-col space-y-[24px] col-span-3 sm:col-span-2">
            <a href="" className="">
              <img
                src={logo}
                width={180}
                height={50}
                alt="logo"
                className="sm:w-[265px] sm:h-[73px]"
              />
            </a>
            <p className="font-normal text-lg text-dim-white md:max-w-[500px]">
              A new way to make the payments easy, reliable and secure.
            </p>
          </div>
          {footerLinks.map((footerLink, key) => {
            const { title, links } = footerLink;
            return (
              <div
                key={key}
                className="flex flex-col space-y-[15px] md:space-y-[24px]"
              >
                <h3 className="text-lg font-medium leading-[27px]">{title}</h3>
                <ul className="flex flex-col gap-2">
                  {links.map((item, key) => {
                    const { name, link } = item;
                    return (
                      <li key={key} className="">
                        <a
                          href={link}
                          className="font-normal text-base text-dim-white leading-[24px] hover:text-secondary"
                        >
                          {name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <hr className="horizontal-line" />
        <div className="flex-col space-y-8 mt-[15px] sm:mt-[30px] sm:flex md:flex-row md:justify-between md:items-center md:space-y-0">
          <div className="flex items-center justify-center gap-[6px] sm:gap-[15px]">
            <span className="font-[Abel] font-normal text-lg text-dim-white">
              Copyright
            </span>
            <span className="text-dim-white">&copy;</span>
            <span className="font-normal text-lg text-dim-white">
              2025 HooBank. All Rights Reserved.
            </span>
          </div>
          <div className="flex gap-8 sm:gap-10 md:gap-[30px] items-center justify-center">
            {socialMedia.map((social) => {
              const { id, icon, link } = social;
              return (
                <a href={link} key={id} target="_blank" rel="noreferrer">
                  <img src={icon} alt={id} className="hover:fill-secondary" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
