import { NavLink } from "react-router-dom";
import { TEXT } from "../../data/text";
import styles from "./404.module.scss";
import { EPages } from "../../data/types";

export const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.h}>{TEXT.ERROR.HEADER}</p>
      <p className={styles.text}>{TEXT.ERROR.MAIN}</p>
      <NavLink to={EPages.MAIN}>
        <button className={styles.button + " button"}>{TEXT.ERROR.BUTTON}</button>
      </NavLink>
    </div>
  );
};
