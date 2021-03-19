import React, {useState} from "react";
import "./CountButton.css";

const CountButton = () => {
    const [currentCount, setCurrentCount] = useState(0);

    const handleClick = () => {
        setCurrentCount(currentCount + 1);
    }

    return (
        <div>
            <div className={"count-display"}>{currentCount}</div>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

export default CountButton;