import React from "react";
import './CustomButton.css'

function CustomButton(props) {

    return (
        <button
            onClick={props.clickHandler}
            className={props.variant ? `main_button ${props.variant}` : `main_button`}>
            {props.children && <span>{props.children}</span>} {props.text}
        </button>
    )
}

export default CustomButton
