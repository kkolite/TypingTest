import { ETestStatus } from "../../../data/types";
import { useAppSelector } from "../../../store/hook";
import styles from './Text.module.scss';

export const Text = () => {
  const data = useAppSelector(store => store.test.textData);
  const currentSymbol = useAppSelector(store => store.test.currentIndex);
  const status = useAppSelector(store => store.test.status); 

  const setStyle = (i: number) => {
    if (currentSymbol > i) return styles.completed;
    if (currentSymbol === i) {
      return status === ETestStatus.ERROR ? styles.error : styles.waiting;
    }
    return '';
  }

  return (
    <div className={styles.textarea}>
      {data.map((el, i) => (
        <span 
          key={i}
          className={setStyle(i)}
        >
          {el}
        </span>
      ))}
    </div>
  );
};
