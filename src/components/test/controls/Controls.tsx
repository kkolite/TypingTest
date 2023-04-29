import { TEXT } from "../../../data/text";
import { useKeypress, useSpeed } from "../../../hooks";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { finish } from "../../../store/slices/testSlice";
import styles from './Controls.module.scss';

export const Controls = () => {
  const dispacth = useAppDispatch();
  const { removeListener } = useKeypress();
  const { stopInterval } = useSpeed();
  const speed = useAppSelector(store => store.test.speed).toFixed(1);
  const quality = useAppSelector(store => store.test.quality).toFixed(1);

  const handleRestart = () => {
    dispacth(finish());
    removeListener();
    stopInterval();
  }

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <span>{TEXT.TEST.SPEED}</span>
        <span className={styles.value}>{speed}</span>
      </div>
      <div className={styles.block}>
        <span>{TEXT.TEST.QUALITY}</span>
        <span className={styles.value}>{quality}</span>
      </div>
      <button 
        className={styles.button + ' button'}
        onClick={handleRestart}
      >
        {TEXT.TEST.RESTART}
      </button>
    </div>
  );
};
