import React, {useState} from "react";
import CountButton from "./CountButton";
import PointsToWin from "./PointsToWin";

export const PointsToWinContext = React.createContext();

const CounterWrapper = () => {

  const [pointsValue, setPointsValue] = useState(3);

  return (
    <div>
      <PointsToWinContext.Provider value={{pointsValue, setPointsValue}}>
        <PointsToWin />
        <CountButton />
        <CountButton />
      </PointsToWinContext.Provider>
      
    </div>
  );
}

export default CounterWrapper;
