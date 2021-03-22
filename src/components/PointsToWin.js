import React, {useContext, useState} from "react";
import { PointsToWinContext } from "./CounterWrapper";
import "./PointsToWin.css";

const PointsToWin = () => {
    const {pointsValue} = useContext(PointsToWinContext);
    const {setPointsValue} = useContext(PointsToWinContext);

    const handleInputChange = (event) => {
        setPointsValue(event.target.value);
    }

    return (
        <div>
            <div className={"points-display"}>{pointsValue}</div>
            <input type="number" value={pointsValue} onChange={handleInputChange} />
        </div>
    )
}

export default PointsToWin;

{/* TODO limit points to win input to only numbers */}