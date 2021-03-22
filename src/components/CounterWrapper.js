import React, {useState} from "react";
import CountButton from "./CountButton";
import PointsToWin from "./PointsToWin";

export const PointsToWinContext = React.createContext();

const CounterWrapper = () => {

  const [pointsValue, setPointsValue] = useState(10);

  return (
    <div>
      <PointsToWinContext.Provider value={{pointsValue, setPointsValue}}>
        <PointsToWin />
      </PointsToWinContext.Provider>
        <CountButton />
        <CountButton />
      
    </div>
  );
}

export default CounterWrapper;
