import React, {useContext, useState} from "react";
import { PointsToWinContext } from "./CounterWrapper";
import "./PointsToWin.css";

const PointsToWin = () => {
    // imports pointsValue state from context
    const {pointsValue} = useContext(PointsToWinContext);
    const {setPointsValue} = useContext(PointsToWinContext);

    // handles input
    const handleInputChange = (event) => {
        setPointsValue(event.target.value);
    }

    // renders the points needed to win display and number input
    return (
        <div>
            <div className={"points-display"}>{pointsValue}</div>
            <input type="number" value={pointsValue} onChange={handleInputChange} />
        </div>
    )
}

export default PointsToWin;
