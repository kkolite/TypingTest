import { useAppDispatch } from "../store/hook";
import { check } from "../store/slices/testSlice";

export const useKeypress = () => {
  const dispatch = useAppDispatch();

  const setListener = () => {
    window.onkeypress = (e) => {
      console.log(e.key);
      //dispatch(check(e.key));
    }
  }

  const removeListener = () => {
    window.onkeypress = null;
  }

  return { setListener, removeListener }
}
