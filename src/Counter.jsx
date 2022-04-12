import { useState } from "react";

const Counter = () => {
  console.log("render");
  const [clickCount, setClickCount] = useState(0);

  const incrementAfterOneSecond = () => {
    setTimeout(() => {
      setClickCount(clickCount + 1);
      console.log("new click count", clickCount);
    }, 1000);
  };

  return (
    <div className="counter">
      Click Count: {clickCount}
      <button type="button" onClick={incrementAfterOneSecond}>Increment</button>
    </div>
  );
}

export default Counter;
