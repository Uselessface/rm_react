import './CustomButton.css'
// eslint-disable-next-line react/prop-types
function CustomButton({clickHandler,variant,text,children,type,formType,position}) {


    return (
        <button
            style={position ?
                {
                    position: 'absolute',
                    top: -20 + 'px',
                    right: -20 + 'px',
                    height: 40 + 'px',
                    width: 40 + 'px',
                    zIndex: 999,
                    borderRadius:50 + '%',
                    padding: 0,
                }: {}}
            type = {type ? `${type}` : `button`}
            onClick ={()=> clickHandler(true,formType)}
            className={variant ? `main_button ${variant}` : `main_button`}>
            {text && <span style={{marginRight: 15 + 'px'}}>{text}</span>}{children}
        </button>
    )
}

export default CustomButton
