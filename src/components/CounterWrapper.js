import React, {useEffect, useState} from "react";
import CountButton from "./CountButton";
import PointsToWin from "./PointsToWin";

export const PointsToWinContext = React.createContext();
export const DidWinContext = React.createContext();

const CounterWrapper = () => {
  const [pointsValue, setPointsValue] = useState(5);

  const [didWin, setDidWin] = useState(false);

  useEffect(() => {
    console.log(didWin);
    if (didWin){
      alert("someone won");
    }
  }, [didWin])

  return (
    <div>
      
      <PointsToWinContext.Provider value={{pointsValue, setPointsValue}}>
        <PointsToWin />
        <DidWinContext.Provider value={{didWin, setDidWin}}>
          <CountButton />
          <CountButton />
        </DidWinContext.Provider>
      </PointsToWinContext.Provider>
      
    </div>
  );
}

export default CounterWrapper;
