import React, {useState} from "react";
import "./CountButton.css";

const CountButton = () => {
    const [currentCount, setCurrentCount] = useState(0);

    const handleClickAddition = () => {
        setCurrentCount(currentCount + 1);
    }

    const handleClickSubstraction = () => {
        setCurrentCount(currentCount - 1);
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