import { useAppDispatch } from "../store/hook"
import { setSpeed } from "../store/slices/testSlice";

export const useSpeed = () => {
  const dispatch = useAppDispatch();
  let interval:number;

  const startInterval = () => interval = setInterval(() => dispatch(setSpeed()), 1000);
  const stopInterval = () => clearInterval(interval);

  return { startInterval, stopInterval }
}
