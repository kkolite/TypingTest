import { TBody, THead } from '..';
import styles from './Table.module.scss';

export const Table = () => {
  return (
    <table className={styles.table}>
      <THead />
      <TBody />
    </table>
  );
};
