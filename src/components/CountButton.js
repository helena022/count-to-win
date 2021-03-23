import React, {useState, useContext} from "react";
import "./CountButton.css";
import { DidWinContext, PointsToWinContext } from "./CounterWrapper";

const CountButton = () => {
    const [currentCount, setCurrentCount] = useState(0);

    const {pointsValue} = useContext(PointsToWinContext);
    const {setDidWin} = useContext(DidWinContext);
    const {didWin} = useContext(DidWinContext);

    const handleClickAddition = () => {
        if(currentCount === pointsValue - 1){
            setCurrentCount(currentCount + 1);
            setDidWin(true);
            /*alert("YOU WIN!");
            setCurrentCount(0);*/
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

    return (
        <div>
            <div className={"count-display"}>{currentCount}</div>
            <button onClick={handleClickSubstraction}>-1</button>
            <button onClick={handleClickAddition}>+1</button>
        </div>
    )
}

export default CountButton;