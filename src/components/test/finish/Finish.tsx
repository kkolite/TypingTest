import { useEffect, useState } from "react";
import { useKeypress, useSpeed } from "../../../hooks";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { addResult } from "../../../store/slices/topSlice";
import { getTimeString } from "../../../utils";
import { finish } from "../../../store/slices/testSlice";
import { TEXT } from "../../../data/text";
import styles from "./Finish.module.scss";

export const Finish = () => {
  const { stopInterval } = useSpeed();
  const { removeListener } = useKeypress();
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");

  const speed = useAppSelector((state) => state.test.speed);
  const quality = useAppSelector((state) => state.test.quality);
  const start = useAppSelector((state) => state.test.startTime);
  const end = useAppSelector((state) => state.test.endTime);
  const time = end - start;
  const timeString = getTimeString(time);

  useEffect(() => {
    stopInterval();
    removeListener();
  });

  const handleSaveResult = () => {
    const result = {
      name: name || "Anonim",
      time,
      speed,
      quality,
    };
    dispatch(addResult(result));
    dispatch(finish());
  };

  const handleTryAgain = () => {
    dispatch(finish());
  };

  return (
    <div className={styles.container}>
      <p className={styles.h}>{TEXT.TEST.CONGRATS}</p>
      <p className={styles.text}>{TEXT.TEST.FINISH}</p>
      <ul className={styles.list}>
        <li>
          {TEXT.TEST.SPEED}: {speed.toFixed(1)} {TEXT.TEST.SperM}
        </li>
        <li>
          {TEXT.TEST.QUALITY}: {quality.toFixed(1)} {TEXT.TEST.PERCENT}
        </li>
        <li>
          {TEXT.TEST.TIME}: {timeString}
        </li>
      </ul>
      <input
        type="text"
        placeholder={TEXT.TEST.PLACEHOLDER}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <div className={styles.button__container}>
        <button
          onClick={handleSaveResult}
          className={styles.button + " button"}
        >
          {TEXT.TEST.SAVE}
        </button>
        <button onClick={handleTryAgain} className={styles.button + " button"}>
          {TEXT.TEST.AGAIN}
        </button>
      </div>
    </div>
  );
};
