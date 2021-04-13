import React, {useContext, useState} from "react";
import { PointsToWinContext } from "../CounterWrapper/CounterWrapper";
import "../PointsToWin/PointsToWin.css";

const PointsToWin = () => {
    // state that enables score needed to win to be edited when true
    const [shouldDisplayInput, setShouldDisplayInput] = useState(false);

    // imports pointsValue state from context
    const {pointsValue} = useContext(PointsToWinContext);
    const {setPointsValue} = useContext(PointsToWinContext);

    // state to store input temporarily, enables canceling the input and reverting pointsValue to previous state
    const [tempPointsValue, setTempPointsValue] = useState(pointsValue);

    // edit button
    const handleEditButton = () => {
        setShouldDisplayInput(true);
    }

    // handles input change
    const handleInputChange = (event) => {
        setTempPointsValue(event.target.value);
    }

    // handles ok button to accept new input
    const handleOkButton = (event) => {
        setPointsValue(tempPointsValue);
        //alert("New win condition is " + tempPointsValue + " points");
        setShouldDisplayInput(false);
    }

    // handles cancel button
    const handleCancelButton = (event) => {
        setShouldDisplayInput(false);
    }

    // renders the points needed to win display and number input
    return (
        <div>
            {!shouldDisplayInput && (
                <div className={"points-display"}>{pointsValue}
                    <button onClick={handleEditButton}>edit</button>
                </div>
            )}
            {shouldDisplayInput && (
                <div className={"edit-points"}>
                    <input type="number" value={tempPointsValue} onChange={handleInputChange} />
                    <button type="submit" onClick={handleOkButton}>ok</button>
                    <button type="submit" onClick={handleCancelButton}>cancel</button>
                </div>
                )}
        </div>
    )
}

export default PointsToWin;
