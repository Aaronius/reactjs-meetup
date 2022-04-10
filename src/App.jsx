import "./App.css";
import {useEffect} from "react";
import Clock from "./Clock.jsx";

let time = new Date();

const App = () => {
  console.log("render");
  useEffect(() => {
    const intervalId = setInterval(() => {
      time = new Date();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <Clock time={time} />;
};

export default App;
