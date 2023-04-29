import { ESort } from "../../../data/types";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { setSort } from "../../../store/slices/topSlice";
import styles from './THead.module.scss';

export const THead = () => {
  const activeSort = useAppSelector(store => store.top.sortType);
  const dispatch = useAppDispatch();

  const handleClick = (sortType: ESort) => {
    dispatch(setSort(sortType));
  }

  return (
    <thead>
      <tr className={styles.thead}>
        <th>
          Name
        </th>
        <th 
          onClick={() => handleClick(ESort.SPEED)}
          className={activeSort === ESort.SPEED ? styles.active : ''}
        >
          Speed
        </th>
        <th 
          onClick={() => handleClick(ESort.TIME)}
          className={activeSort === ESort.TIME ? styles.active : ''}
        >
          Time
        </th>
        <th 
          onClick={() => handleClick(ESort.QUALITY)}
          className={activeSort === ESort.QUALITY ? styles.active : ''}
        >
          Quality
        </th>
      </tr>
    </thead>
  );
};
