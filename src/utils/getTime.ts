import { useAppSelector } from "../store/hook";

export const getTime = () => {
  const start = useAppSelector(state => state.test.startTime);
  const end = useAppSelector(state => state.test.endTime);

  return end - start;
} 