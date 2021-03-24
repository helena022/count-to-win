import React, {useEffect, useState, createContext, setState} from "react";
import CountButton from "./CountButton";
import PointsToWin from "./PointsToWin";

export const PointsToWinContext = createContext(); 
export const DidWinContext = createContext();

const CounterWrapper = () => {
  // CounterWrapper state declarations
  const [pointsValue, setPointsValue] = useState(5);
  const [didWin, setDidWin] = useState(false);

  // renders PointsToWin component and two CountButtons
  return (
    <div>
      
      {/* provides pointsValue state to PointsToWin and CountButton components*/}
      <PointsToWinContext.Provider value={{pointsValue, setPointsValue}}>
        
        <PointsToWin />

        {/* provides didWin state to CountButton components */}
        <DidWinContext.Provider value={{didWin, setDidWin}}>
          <CountButton team="Team 1" />
          <CountButton team="Team 2"/>
        </DidWinContext.Provider>
        
      </PointsToWinContext.Provider>
      
    </div>
  );
}

export default CounterWrapper;
