import {useRef} from "react";
import "./App.css";

function App() {
  const inputRef = useRef();

  return (
    <div className="app">
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus Input
      </button>
    </div>
  );
}

export default App;
