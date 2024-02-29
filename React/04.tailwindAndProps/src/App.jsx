import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  let myObj = {
    name: "John",
    age: 30,
  };

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-5">
        Tailwind Test
      </h1>
      <Card userName="Topu" btnText = 'Click Me'/>
      <Card userName="Nazim" />
    </>
  );
}

export default App;
