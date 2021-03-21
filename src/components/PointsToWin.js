import React, {useState} from "react";
import "./PointsToWin.css";

const PointsToWin = () => {
    const [pointsValue, setPointsValue] = useState(10);

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