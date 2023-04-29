import { NavLink } from "react-router-dom";
import { EPages } from "../../../data/types";
import styles from './Header.module.scss';
import { TEXT } from "../../../data/text";

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to={EPages.MAIN} className={styles.logo}>
        {TEXT.HEADER.LOGO}
      </NavLink>
      <nav className={styles.nav}>
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
    </header>
  );
};
