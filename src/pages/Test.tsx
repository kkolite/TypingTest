import { Controls, Loader, Start, Text } from "../components/test";
import { ETestStatus } from "../data/types";
import { useAppSelector } from "../store/hook";

export const Test = () => {
  const status = useAppSelector(store => store.test.status)
  return (
    <div>
      {status === ETestStatus.SLEEP ? <Start /> : <></>}
      {status === ETestStatus.LOADING ? <Loader /> : <></>}
      {status === ETestStatus.FINISH ? <></> : <></>}
      {
        (status === ETestStatus.WAITING || status === ETestStatus.ERROR)
         ? <div>
             <Controls />
             <Text />
           </div> 
         : <></>
      }
    </div>
  );
};
