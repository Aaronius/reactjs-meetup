import { useEffect, useRef, useState } from "react";

const Counter = () => {
  console.log("render");
  const [clickCount, setClickCount] = useState(0);
  const timeoutIdsRef = useRef([]);

  const incrementAfterOneSecond = () => {
    const timeoutId = setTimeout(() => {
      setClickCount((clickCount) => clickCount + 1);
      timeoutIdsRef.current.splice(
        timeoutIdsRef.current.indexOf(timeoutId),
        1
      );
      console.log("new click count", clickCount);
    }, 1000);

    timeoutIdsRef.current.push(timeoutId);
  };

  useEffect(() => {
    return () => {
      console.log("timeout IDs being cleared on unmount", timeoutIdsRef.current);
      timeoutIdsRef.current.forEach(clearTimeout);
    }
  }, []);

  return (
    <div className="counter">
      Click Count: {clickCount}
      <button type="button" onClick={incrementAfterOneSecond}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
