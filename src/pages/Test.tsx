import {
  Controls,
  ErrorMessage,
  Finish,
  Loader,
  Start,
  Text,
} from "../components/test";
import { ETestStatus } from "../data/types";
import { useAppSelector } from "../store/hook";

export const Test = () => {
  const status = useAppSelector((store) => store.test.status);
  return (
    <>
      {status === ETestStatus.SLEEP ? <Start /> : <></>}
      {status === ETestStatus.LOADING ? <Loader /> : <></>}
      {status === ETestStatus.FINISH ? <Finish /> : <></>}
      {status === ETestStatus.API_ERROR ? <ErrorMessage /> : <></>}
      {status === ETestStatus.WAITING || status === ETestStatus.ERROR ? (
        <>
          <Controls />
          <Text />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
