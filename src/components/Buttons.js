import "./Buttons.css";


function Buttons({text , id , clickHandler}) {
    return (
        <button id={id} onClick={clickHandler}>{text}</button>
    );
}


export default Buttons;
