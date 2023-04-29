import { AUTHOR_GITHUB } from "../../../data/consts";
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>2023</p>
      <a href={AUTHOR_GITHUB} className={styles.link}>kkolite</a>
    </footer>
  );
};
