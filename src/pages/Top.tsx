import { Empty, Table } from "../components/top";
import { useAppSelector } from "../store/hook";

export const Top = () => {
  const top = useAppSelector((state) => state.top.top);
  return <>{top.length ? <Table /> : <Empty />}</>;
};
