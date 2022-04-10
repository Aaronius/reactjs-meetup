import "./App.css";
import { useState } from "react";

const App = () => {
  console.log("render");
  const [user, setUser] = useState({ name: "", age: 0 });

  const updateUser = () => {
    user.name = "Tom";
    setUser(user);
  };

  return (
    <>
      <h2>Name: {user.name}</h2>
      <button onClick={updateUser}>Update User</button>
    </>
  );
};

export default App;
