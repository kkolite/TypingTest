import { useAppSelector } from "../../../store/hook";

export const Controls = () => {
  const speed = useAppSelector(store => store.test.speed).toFixed(1);
  const quality = useAppSelector(store => store.test.quality).toFixed(1);

  return (
    <div>
      <div>
        <span>Speed</span>
        <span>{speed}</span>
      </div>
      <div>
        <span>Quality</span>
        <span>{quality}</span>
      </div>
      <button>Restart</button>
    </div>
  );
};
