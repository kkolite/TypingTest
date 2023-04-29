import { TEXT } from "../../../data/text";
import { ESort } from "../../../data/types";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { setSort } from "../../../store/slices/topSlice";
import styles from "./THead.module.scss";

export const THead = () => {
  const activeSort = useAppSelector((store) => store.top.sortType);
  const dispatch = useAppDispatch();

  const handleClick = (sortType: ESort) => {
    dispatch(setSort(sortType));
  };

  return (
    <thead>
      <tr className={styles.thead}>
        <th>{TEXT.TEST.NAME}</th>
        <th
          onClick={() => handleClick(ESort.SPEED)}
          className={activeSort === ESort.SPEED ? styles.active : ""}
        >
          {TEXT.TEST.SPEED}
        </th>
        <th
          onClick={() => handleClick(ESort.TIME)}
          className={activeSort === ESort.TIME ? styles.active : ""}
        >
          {TEXT.TEST.TIME}
        </th>
        <th
          onClick={() => handleClick(ESort.QUALITY)}
          className={activeSort === ESort.QUALITY ? styles.active : ""}
        >
          {TEXT.TEST.QUALITY}
        </th>
      </tr>
    </thead>
  );
};
