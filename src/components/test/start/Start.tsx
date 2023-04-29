import { useKeypress, useSpeed } from "../../../hooks";
import { useAppDispatch } from "../../../store/hook";
import { fetchText } from "../../../store/slices/testSlice";

export const Start = () => {
  const dispatch = useAppDispatch();
  const { setListener } = useKeypress();
  const { startInterval } = useSpeed();

  const handleClick = () => {
    dispatch(fetchText());
    startInterval();
    setListener();
  }

  return (
    <div>
      <p>Are you ready?</p>
      <button onClick={handleClick}>Let's Start!</button>
    </div>
  );
};
