import classNames from "classnames";

import "./header-styles.scss";

import logo from "../../assets/icons/logo.svg";
import burger from "../../assets/icons/icon-hamburger.svg";
import close from "../../assets/icons/icon-close.svg";
import { useState } from "react";
import { Button } from "../Button";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Insure" />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="header__logo__menu-toggle"
        >
          <img src={menuOpen ? close : burger} alt="Open Menu" />
        </button>
      </div>

      <ul
        className={classNames({
          ["header__items"]: true,
          ["header__items--mobile-close"]: menuOpen == false,
        })}
      >
        <li className="header__items__item">how we work</li>
        <li className="header__items__item">blog</li>
        <li className="header__items__item">account</li>
        <Button btnTxt="View plans" light={false} />
      </ul>
    </div>
  );
};
