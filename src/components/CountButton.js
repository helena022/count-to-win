import React, {useState, useContext, useEffect, createContext} from "react";
import "./CountButton.css";
import { DidWinContext, PointsToWinContext } from "./CounterWrapper";

export const CountButtonContext = createContext();

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0);

    const {pointsValue} = useContext(PointsToWinContext);
    const {setDidWin} = useContext(DidWinContext);
    const {didWin} = useContext(DidWinContext);

    const handleClickAddition = () => {
        if(currentCount === pointsValue - 1){
            setCurrentCount(currentCount + 1);
            
            setTimeout(function(){ 
                alert(props.team.toUpperCase() + " WINS!");
                setDidWin(true); }, 
                50);
            
            /*setCurrentCount(currentCount + 1);
            setDidWin(true);
            alert(props.team.toUpperCase() + " WINS!");*/
        } else {
            setCurrentCount(currentCount + 1);
        } 
    }

    const handleClickSubstraction = () => {
        if (currentCount > 0){
            setCurrentCount(currentCount - 1);
        } else {
            setCurrentCount(0);
            alert("Team points can't go under 0");      
        }   
    }

    useEffect(() => {
        if (didWin){
            setCurrentCount(0);
            setDidWin(false);
        }
      }, [didWin]);
    

    return (
        <div>
            {props.team}
            <div className={"count-display"}>{currentCount}</div>
            <button onClick={handleClickSubstraction}>-1</button>
            <button onClick={handleClickAddition}>+1</button>
        </div>
    )
}

export default CountButton;