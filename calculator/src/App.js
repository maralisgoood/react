import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);

  const click = (event) => {
    setResult(result.concat(event.target.name));
  };

  const clear = (event) => {
    setResult("");
  };

  return (
    <div className="container">
      <h3>CALCULATOR</h3>
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button id="clear" onClick={clear}>A/C</button>
        <button name="7" onClick={click}>7</button>
        <button name="8" onClick={click}>8</button>
        <button name="9" onClick={click}>9</button>
        <button name="×" className="operator" onClick={click}>&times;</button>
        <button name="4" onClick={click}>4</button>
        <button name="5" onClick={click}>5</button>
        <button name="6" onClick={click}>6</button>
        <button name="÷" className="operator" onClick={click}>&divide;</button>
        <button name="1" onClick={click}>1</button>
        <button name="2" onClick={click}>2</button>
        <button name="3" onClick={click}>3</button>
        <button name="+" className="operator" onClick={click}>+</button>
        <button name="-" className="operator" onClick={click}>-</button>
        <button name="0" onClick={click}>0</button>
        <button onClick={click} id="total">=</button>
      </div>
    </div>
  );
}

export default App;
