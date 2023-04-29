import { TEXT } from "../../data/text";
import styles from './404.module.scss';

export const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.h}>
        {TEXT.ERROR.HEADER}
      </p>
      <p className={styles.text}>
        {TEXT.ERROR.MAIN}
      </p>
      <button className={styles.button + ' button'}>
        {TEXT.ERROR.BUTTON}
      </button>
    </div>
  );
};
