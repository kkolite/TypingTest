import { NavLink } from "react-router-dom";
import { EPages } from "../../data/types";
import { useAnimation } from "../../hooks";
import { TEXT } from "../../data/text";
import styles from "./About.module.scss";

export const AboutInfo = () => {
  const animation = useAnimation(200);

  return (
    <>
      <section className={styles.section}>
        <div
          className={
            animation ? styles.block : styles.block + " " + styles.active__text
          }
        >
          <h4>{TEXT.ABOUT.TIME}</h4>
          <NavLink to={EPages.TEST}>
            <button className={styles.button}>{TEXT.ABOUT.BUTTON}</button>
          </NavLink>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/6329/6329420.png"
          alt="keyboard"
          className={
            animation ? styles.image : styles.image + " " + styles.active__image
          }
        />
      </section>
      <div className={styles.quote__container}>
        <section className={styles.quote}>
          <p className={styles.quote__text}>{TEXT.ABOUT.QUOTE}</p>
          <p className={styles.quote__author}>{TEXT.ABOUT.QUOTE_AUTHOR}</p>
        </section>
      </div>
      <section className={styles.section}>
        <img
          src="/React-icon.png"
          alt="react-orange"
          className={
            animation ? styles.image : styles.image + " " + styles.active__image
          }
        />
        <div
          className={
            animation ? styles.block : styles.block + " " + styles.active__text
          }
        >
          <h4>{TEXT.ABOUT.STACK}</h4>
          <ul>
            <li>{TEXT.ABOUT.STACK_1}</li>
            <li>{TEXT.ABOUT.STACK_2}</li>
            <li>{TEXT.ABOUT.STACK_3}</li>
            <li>{TEXT.ABOUT.STACK_4}</li>
          </ul>
          <a href="https://github.com/kkolite">
            <button className={styles.button}>{TEXT.ABOUT.GITHUB}</button>
          </a>
        </div>
      </section>
    </>
  );
};
