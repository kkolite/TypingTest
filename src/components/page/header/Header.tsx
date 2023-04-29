import { NavLink } from "react-router-dom";
import { EPages } from "../../../data/types";
import styles from "./Header.module.scss";
import { TEXT } from "../../../data/text";
import { useState } from "react";

export const Header = () => {
  const [burger, toggleBurger] = useState(false);

  const handleMenu = () => {
    toggleBurger(!burger);
  };

  return (
    <header className={styles.header}>
      <NavLink to={EPages.MAIN} className={styles.logo}>
        {TEXT.HEADER.LOGO}
      </NavLink>
      <nav
        className={burger ? styles.nav + " " + styles.nav__active : styles.nav}
      >
        <NavLink to={EPages.MAIN} className={styles.link}>
          {TEXT.HEADER.ABOUT}
        </NavLink>
        <NavLink to={EPages.TEST} className={styles.link}>
          {TEXT.HEADER.TEST}
        </NavLink>
        <NavLink to={EPages.TOP} className={styles.link}>
          {TEXT.HEADER.TOP}
        </NavLink>
      </nav>
      <button className={styles.menu} onClick={handleMenu}>
        Menu
      </button>
    </header>
  );
};
