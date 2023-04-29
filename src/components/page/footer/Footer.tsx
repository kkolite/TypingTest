import { AUTHOR_GITHUB } from "../../../data/consts";
import { TEXT } from "../../../data/text";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>{TEXT.FOOTER.YEAR}</p>
      <a href={AUTHOR_GITHUB} className={styles.link}>
        {TEXT.FOOTER.AUTHOR}
      </a>
    </footer>
  );
};
