import { useState } from "react";
import { ClassComponent } from "./Component";
import { FuncComponent } from "./Component";
import { Counter } from "./Counter";
import { MyClassComponent } from "./MyClassComponent";
import "./App.css";

const setRandom = () => Math.round(Math.random() * (1 - 0) + 0);

function App() {
  const [item, setItem] = useState([]);
  const [input, setInput] = useState("");

  const onClickHandler = () => {
    setItem([...item, input]);
    setInput("");
  };

  const onChangeHandler = (e) => setInput(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Render by condition{" "}
          {setRandom() === 1 ? <ClassComponent /> : <FuncComponent />}
        </h1>
      </header>

      <main>
        <MyClassComponent />

        <Counter />

        <div className="list">
          <input onChange={onChangeHandler} value={input} />
          <ul>
            {item.map((el, index) => (
              <li key={index}>
                {el} {index + 1}
              </li>
            ))}
          </ul>
          <button onClick={onClickHandler}>Add new element</button>
        </div>
      </main>
    </div>
  );
}

export default App;
