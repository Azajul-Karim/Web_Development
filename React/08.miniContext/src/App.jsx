import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContext from "./context/UserContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContext.Provider>
      <Login />
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
