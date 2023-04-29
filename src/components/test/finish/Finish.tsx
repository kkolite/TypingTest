import { useEffect, useState } from "react";
import { useKeypress, useSpeed } from "../../../hooks";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { addResult } from "../../../store/slices/topSlice";
import { getTime, getTimeString } from "../../../utils";
import { finish } from "../../../store/slices/testSlice";
import styles from './Finish.module.scss';

export const Finish = () => {
  const { stopInterval } = useSpeed();
  const { removeListener } = useKeypress();
  const dispatch = useAppDispatch();

  const [ name, setName ] = useState('');

  const speed = useAppSelector(state => state.test.speed);
  const quality = useAppSelector(state => state.test.quality);
  const time = getTime();
  const timeString = getTimeString(time);

  useEffect(() => {
    stopInterval();
    removeListener();
  });

  const handleSaveResult = () => {
    const result = {
      name: name || 'Anonim',
      time,
      speed,
      quality
    }
    dispatch(addResult(result));
    dispatch(finish());
  }

  const handleTryAgain = () => {
    dispatch(finish());
  }
  
  return (
    <div className={styles.container}>
      <p className={styles.h}>Congrats!</p>
      <p className={styles.text}>You success passed test! You can save result (type your name or save it as anonim)</p>
      <ul className={styles.list}>
        <li>Speed: {speed.toFixed(1)} s/m</li>
        <li>Quality: {quality.toFixed(1)} %</li>
        <li>Time: {timeString}</li>
      </ul>
      <input 
        type="text"
        placeholder="Enter your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <div className={styles.button__container}>
        <button 
          onClick={handleSaveResult}
          className={styles.button + ' button'}
        >
          Save result
        </button>
        <button 
          onClick={handleTryAgain}
          className={styles.button + ' button'}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};
