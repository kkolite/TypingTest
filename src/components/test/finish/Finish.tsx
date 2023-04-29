import { useEffect, useState } from "react";
import { useSpeed } from "../../../hooks";
import { useAppSelector } from "../../../store/hook";

export const Finish = () => {
  const { stopInterval } = useSpeed();

  const [ name, setName ] = useState('');

  const speed = useAppSelector(state => state.test.speed);
  const quality = useAppSelector(state => state.test.quality);
  const start = useAppSelector(state => state.test.startTime);

  const time = Date.now() - start;

  useEffect(() => {
    stopInterval();
  }, []);

  const handleClick = () => {
    // Set to top
  }
  
  return (
    <div>
      <p>Congrats!</p>
      <p>Ypu success passed test</p>
      <ul>
        <li>Speed: {speed}</li>
        <li>Time: {speed}</li>
        <li>Quality: {quality}</li>
      </ul>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Save result</button>
    </div>
  );
};
