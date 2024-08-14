import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap  gap-3 shadow-xl bg-white px-5 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-full text-white shadow-xl py-2"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "#ed9e15" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setColor("#ed15c9")}
            className="outline-none px-4 rounded-full text-white shadow-xl"
            style={{ backgroundColor: "#ed15c9" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
