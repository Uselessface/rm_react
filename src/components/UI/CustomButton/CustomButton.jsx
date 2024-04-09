import './CustomButton.css'
function CustomButton({clickHandler,variant,text,children,type,formType}) {
    

    return (
        <button
            type = {type ? `${type}` : `button`}
            onClick ={()=> clickHandler(true,formType)}
            className={variant ? `main_button ${variant}` : `main_button`}>
            {children && <span style={{marginRight: 15 + 'px'}}>{children}</span>} {text}
        </button>
    )
}

export default CustomButton
