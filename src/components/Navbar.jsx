import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar flex w-full items-center justify-between py-6">
      <img src={logo} alt="hoobank" className="h-[32px] w-[124px]" />

      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer font-poppins text-[16px] font-normal text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex flex-1 items-center justify-end sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} 
          p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`cursor-pointer font-poppins text-[16px] font-normal text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              }`}
            >
                <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
