import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  //  let counter = 5

  const addValue = () => {
    // counter = counter + 1
    counter === 20
      ? alert("Counter can not be more than 20")
      : setCounter(counter + 1);
  };

  const removeValue = () => {
    counter === 0
      ? alert("Counter can not be negative")
      : setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Subtract Value</button>
    </>
  );
}

export default App;
