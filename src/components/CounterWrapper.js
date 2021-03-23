import React, {useEffect, useState, createContext, setState} from "react";
import CountButton from "./CountButton";
import PointsToWin from "./PointsToWin";

export const PointsToWinContext = createContext(); 
export const DidWinContext = createContext();

const CounterWrapper = () => {
  const [pointsValue, setPointsValue] = useState(5);

  const [didWin, setDidWin] = useState(false);

  return (
    <div>
  
      <PointsToWinContext.Provider value={{pointsValue, setPointsValue}}>
        <PointsToWin />
        <DidWinContext.Provider value={{didWin, setDidWin}}>
          <CountButton team="Team 1" />
          <CountButton team="Team 2"/>
        </DidWinContext.Provider>
      </PointsToWinContext.Provider>
      
    </div>
  );
}

export default CounterWrapper;
