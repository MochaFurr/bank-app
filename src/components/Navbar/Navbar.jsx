import { useState } from "react";

import style from "./styles";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${style.navbar}`}>
      <img src={logo} alt="hoobank" className={`${style.logoSize}`} />

      <ul className={`${style.ulLg}`}>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`${style.liLg} ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className={`${style.menuLg} sm:hidden`}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className={`${style.menuBtn}`}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"} ${style.menuSm}`}
        >
          <ul className={`${style.ulSm}`}>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`${style.liSm} ${
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
