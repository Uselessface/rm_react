import React from "react";
import './CustomButton.css'

function CustomButton({clickHandler,variant,text,children}) {
    

    return (
        <button
            onClick ={()=> clickHandler(true)}
            className={variant ? `main_button ${variant}` : `main_button`}>
            {children && <span style={{marginRight: 15 + 'px'}}>{children}</span>} {text}
        </button>
    )
}

export default CustomButton
