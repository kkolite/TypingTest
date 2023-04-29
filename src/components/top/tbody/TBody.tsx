import { useAppSelector } from "../../../store/hook";
import { getTimeString } from "../../../utils";

export const TBody = () => {
  const top = useAppSelector(state => state.top.top);

  return (
    <tbody>
      {top.map((el) => (
        <tr key={el.speed}>
          <td>{el.name}</td>
          <td>{el.speed.toFixed(1)}</td>
          <td>{getTimeString(el.time)}</td>
          <td>{el.quality.toFixed(1)}</td>
        </tr>
      ))}
    </tbody>
  );
};
