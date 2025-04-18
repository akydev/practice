import { useReducer } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const initialState = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return {
        count: state.count + 1,
      };
    case "DEC":
      if (state.count > 0) {
        return {
          count: state.count - 1,
        };
      }

    default:
      return state;
  }
};

function App() {
  // const [count, setCount] = useState(0);
  // const inc = () => {
  //   setCount((count) => count + 1);
  // };

  // const dec = () => {
  //   if (count > 0) {
  //     setCount((count) => count - 1);
  //   }
  // };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        {" "}
        <label>{state.count}</label>
      </div>
      <div className="card">
        {/* <button onClick={() => inc()}>Inc</button>
        <button onClick={() => dec()}>Dec</button> */}
        <button onClick={() => dispatch({ type: "INC" })}>Inc</button>
        <button onClick={() => dispatch({ type: "DEC" })}>Dec</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
