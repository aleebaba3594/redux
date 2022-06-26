import "./App.css";
import Child from "./components/Child";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";
import Child4 from "./components/Child4";
import Child5 from "./components/Child5";
import { useSelector } from "react-redux";
function App() {
  const myState = useSelector((state) => state.counterReducer);
  return (
    <div className="App">
      <h1>
        React Counter using react-redux
        <br />
      </h1>
      <input type="text" className="inp" readOnly={true} value={myState} />
      <div className="toflex">
        <Child />
        <Child2 />
        <Child3 />
        <Child4 />
        <Child5 />
      </div>
    </div>
  );
}

export default App;
