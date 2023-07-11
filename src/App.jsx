import "./App.css";
import React from "react";
import { Counter } from "./components/Counter";
import { Text } from "./components/Text";
import { SingleLight } from "./components/SingleLight";
import { useState } from "react";
import { Grid } from "./components/Grid";

function App() {
  const [rows, setRows] = useState(0);

  const handleAddRow = () => {
    setRows(rows + 1);
  };

  const handleMinusRow = () => {
    if (rows <= 0) return;
    setRows(rows - 1);
  };

  const [columns, setColumns] = useState(0);

  const handleAddColumn = () => {
    if (columns >= 9) return;
    setColumns(columns + 1);
  };

  const handleMinusColumn = () => {
    if (columns <= 0) return;
    setColumns(columns - 1);
  };

  const totalLights = rows * columns;
  const lights = Array.from({ length: totalLights });

  return (
    <div>
      <nav className={"nav"}>
        <Text>{totalLights} bulbs</Text>
        <Counter
          text={"rows"}
          count={rows}
          onAdd={handleAddRow}
          onMinus={handleMinusRow}
        />
        <Counter
          text={"columns"}
          count={columns}
          onAdd={handleAddColumn}
          onMinus={handleMinusColumn}
        />
      </nav>
      <Grid columns={columns}>
        {lights.map((value, index) => {
          return <SingleLight key={index} />;
        })}
      </Grid>
    </div>
  );
}

export default App;
