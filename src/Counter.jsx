import { useRef, useState } from "react";

const Counter = () => {
  console.log("render");
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }

    timerIdRef.current = setInterval(() => {
      setCount((latestCount) => latestCount + 1);
    }, 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  return (
    <div className="counter">
      Timer: {count} seconds
      <button type="button" onClick={startHandler}>
        Start
      </button>
      <button type="button" onClick={stopHandler}>
        Stop
      </button>
    </div>
  );
};

export default Counter;
