import { useState } from "react";
import Buttons from "./Buttons";
import "./Counter.css";


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
                <Buttons text="+" id="increase" clickHandler={increase}></Buttons>
                { !(currentNumber === 0) && (
                    <>
                        <Buttons text="Reset" id="reset" clickHandler={reset}></Buttons>
                    </>
                )}
                <Buttons text="-" id="decrease" clickHandler={decrease}></Buttons>
            </div>
            </div>
        </>
    );
}


export default Counter;
