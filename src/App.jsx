import Counter from "./Counter";

import "./App.css";
import { useState } from "react";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <div className="app">
      { showCounter && <Counter /> }
      <button onClick={() => setShowCounter(false)}>Hide Counter</button>
    </div>
  );
}

export default App;
