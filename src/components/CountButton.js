import React, {useState, useContext} from "react";
import "./CountButton.css";
import { PointsToWinContext } from "./CounterWrapper";

const CountButton = () => {
    const [currentCount, setCurrentCount] = useState(0);
    const {pointsValue} = useContext(PointsToWinContext);

    let didWin = false;

    const handleClickAddition = () => {
        if(currentCount >= pointsValue){
            didWin = true;
            alert("YOU WIN!")
            setCurrentCount(0);
        } else {
            setCurrentCount(currentCount + 1);
            console.log(currentCount);
            console.log(didWin);
        } 
    }

    const handleClickSubstraction = () => {
        if(currentCount >= pointsValue){
            didWin = true;
            alert("YOU WIN!")
            setCurrentCount(0);
        } else {
            setCurrentCount(currentCount - 1);
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