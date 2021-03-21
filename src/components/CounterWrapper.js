import React from "react";
import ReactDOM from "react-dom";
import CountButton from "./CountButton";
import PointsToWin from "./PointsToWin";

const CounterWrapper = () => {
  return (
    <div>
        <PointsToWin />
        <CountButton />
        <CountButton />
    </div>
  );
}

export default CounterWrapper;
