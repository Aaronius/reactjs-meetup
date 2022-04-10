const Counter = () => {
  console.log("render");
  let clickCount = 0;

  return (
    <div className="counter">
      Click Count: {clickCount}
      <button type="button" onClick={() => { clickCount++ }}>Increment</button>
    </div>
  );
}

export default Counter;
