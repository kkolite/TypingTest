import { NavLink } from "react-router-dom";
import { EPages } from "../../../data/types";
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to={EPages.MAIN} className={styles.logo}>Typing</NavLink>
      <nav className={styles.nav}>
        <NavLink to={EPages.MAIN} className={styles.link}>About</NavLink>
        <NavLink to={EPages.TEST} className={styles.link}>Test</NavLink>
        <NavLink to={EPages.TOP} className={styles.link}>Top</NavLink>
      </nav>
    </header>
  );
};
