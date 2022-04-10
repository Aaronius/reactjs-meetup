import { useState } from "react";

const Counter = () => {
  console.log("render");
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="counter">
      Click Count: {clickCount}
      <button type="button" onClick={() => { setClickCount(clickCount + 1); }}>Increment</button>
    </div>
  );
}

export default Counter;
