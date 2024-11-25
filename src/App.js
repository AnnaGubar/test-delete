import "./App.css";
import { ClassComponent } from "./Component";
import { FuncComponent } from "./Component";

let condition = true;
// let condition = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {condition ? <ClassComponent /> : <FuncComponent />}
      </header>
    </div>
  );
}

export default App;
