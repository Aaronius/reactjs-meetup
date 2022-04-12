import Counter from "./Counter";

import "./App.css";
import { useState } from "react";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <>
      { showCounter && <Counter /> }
      <button onClick={() => setShowCounter(false)}>Hide Counter</button>
    </>
  );
}

export default App;
