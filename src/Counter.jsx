import { useState } from "react";

const Counter = () => {
  console.log("render");
  const [additionCount, setAdditionCount] = useState(0);
  const [subtractionCount, setSubtractionCount] = useState(0);

  const onClick = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
      setAdditionCount(additionCount + 1);
      setSubtractionCount(subtractionCount - 1);
    });
  };

  return (
    <div className="counter">
      <div>Addition Count: {additionCount}</div>
      <div>Subtraction Count: {subtractionCount}</div>
      <button type="button" onClick={onClick}>
        Add and subtract
      </button>
    </div>
  );
};

export default Counter;
