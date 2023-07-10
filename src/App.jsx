import "./App.css";
import React from "react";
import { Counter } from "./components/Counter";
import { Text } from "./components/Text";
import { SingleLight } from "./components/SingleLight";

function App() {
  return (
    <div>
      <nav className={"nav"}>
        <Text>0 bulbs</Text>
        <Counter text={"rows"} count={0} />
        <Counter text={"columns"} count={0} />
      </nav>
      <div>
        <SingleLight />
      </div>
    </div>
  );
}

export default App;
