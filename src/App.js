import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import CountButton from "./components/CountButton";
import PointsToWin from "./components/PointsToWin";

function App() {
  return (
    <div className="App">
      <PointsToWin />
      <CountButton />
      <CountButton />
    </div>
  );
}

export default App;
