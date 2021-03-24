import React, {useState, useContext, useEffect, createContext} from "react";
import "./CountButton.css";
import { DidWinContext, PointsToWinContext } from "./CounterWrapper";

const CountButton = (props) => {
    // count button state declarations
    const [currentCount, setCurrentCount] = useState(0);

    // imported contexts
    const {pointsValue} = useContext(PointsToWinContext);
    const {setDidWin} = useContext(DidWinContext);
    const {didWin} = useContext(DidWinContext);

    // handles +1 button
    const handleClickAddition = () => {
        // if clicking the button would result in winning, trigger win alert and set didWin state to true
        if(currentCount === pointsValue - 1){
            setCurrentCount(currentCount + 1);
            
            setTimeout(function(){ 
                alert(props.team.toUpperCase() + " WINS!");
                setDidWin(true); }, 
                50);
            
        } else {
            // if win conditions aren't met add +1 to currentCount
            setCurrentCount(currentCount + 1);
        } 
    }

    // handles -1 button
    const handleClickSubstraction = () => {
        if (currentCount > 0){
            setCurrentCount(currentCount - 1);
        } else {
            // handles event where team score would go under 0
            setCurrentCount(0);
            alert("Team points can't go under 0");      
        }   
    }

    // if didWin context is true (one team reached score to win), resets the counter
    useEffect(() => {
        if (didWin){
            setCurrentCount(0);
            setDidWin(false);
        }
      }, [didWin]);
    
    // renders the score display div with +1 and -1 buttons
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