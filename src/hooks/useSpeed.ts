import { useAppDispatch } from "../store/hook";
import { setSpeed } from "../store/slices/testSlice";

let interval = 0;

export const useSpeed = () => {
  const dispatch = useAppDispatch();
  const startInterval = () =>
    (interval = setInterval(() => dispatch(setSpeed()), 1000));
  const stopInterval = () => clearInterval(interval);

  return { startInterval, stopInterval };
};
