import { useState } from "react";
import "./Counter.css"


function Counter() {

    let [newcolor , setnewcolor] = useState("#fff");
    let [currentNumber , setcurrentNumber] = useState(0);

    const increase = () => {
        setcurrentNumber(currentNumber + 1);

        if (currentNumber > -1) {
            setnewcolor(newcolor = "green");
        } else if (currentNumber === -1) {
            setnewcolor(newcolor = "#fff");
        }
    }

    const reset = () => {
        setcurrentNumber(currentNumber = 0);

        if (currentNumber === 0) {
            setnewcolor(newcolor = "#fff");
        }
    }

    const decrease = () => {
        setcurrentNumber(currentNumber - 1);

        if (currentNumber < 1) {
            setnewcolor(newcolor = "red");
        } else if (currentNumber === 1) {
            setnewcolor(newcolor = "#fff");
        }
    }

    return (
        <>
            <div className="container">
            <h1>Counter</h1>
            <p id="currentNumber" style={{color: newcolor}}>{currentNumber}</p>
            <div className="buttons">
                <button id="increase" onClick={increase}>+</button>
                { !(currentNumber === 0) && (
                    <>
                        <button id="reset" onClick={reset}>Reset</button>
                    </>
                )}
                <button id="decrease" onClick={decrease}>-</button>
            </div>
            </div>
        </>
    );
}


export default Counter;
