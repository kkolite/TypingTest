import { NavLink } from "react-router-dom";
import { EPages } from "../../../data/types";
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <p>Typing Test</p>
      <nav className={styles.nav}>
        <NavLink to={EPages.MAIN}>About</NavLink>
        <NavLink to={EPages.TEST}>Test</NavLink>
        <NavLink to={EPages.TOP}>Top</NavLink>
      </nav>
    </header>
  );
};
