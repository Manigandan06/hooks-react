import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //state = data
  const [count, setcount] = useState(0);
  const [input, setinput] = useState(0);
  const [favTotals, setfavTotals] = useState([]);
  const [data, setdata] = useState();

  //effect = function

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);

  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>React Hooks</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setcount(0);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setcount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setcount(count + Number(input));
        }}
      >
        Increment by {input}
      </button>
      <input
        type="text"
        onChange={(e) => {
          setinput(e.target.value);
        }}
        value={input}
      />
      <hr />
      <button
        onClick={() => {
          setfavTotals([...favTotals, count]);
        }}
      >
        Add FavNumbers
      </button>
      <pre>{JSON.stringify(favTotals, null, 2)}</pre>
    </div>
  );
}

export default App;
