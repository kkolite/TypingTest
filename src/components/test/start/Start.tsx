import { TEXT } from "../../../data/text";
import { useKeypress, useSpeed } from "../../../hooks";
import { useAppDispatch } from "../../../store/hook";
import { fetchText } from "../../../store/slices/testSlice";
import styles from "./Start.module.scss";

export const Start = () => {
  const dispatch = useAppDispatch();
  const { setListener } = useKeypress();
  const { startInterval } = useSpeed();

  const handleClick = () => {
    dispatch(fetchText());
    startInterval();
    setListener();
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>{TEXT.TEST.READY}</p>
      <button onClick={handleClick} className={styles.button + " button"}>
        {TEXT.TEST.START}
      </button>
    </div>
  );
};
