import { TEXT } from '../../../data/text';
import styles from './Empty.module.scss';

export const Empty = () => {
  return (
    <p className={styles.text}>{TEXT.TEST.EMPTY}</p>
  );
};
