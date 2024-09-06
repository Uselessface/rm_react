import './FormInput.css'
// eslint-disable-next-line react/prop-types
const Input = ({type, placeholder, required,innerRef, label}) => {
    return (
            <div className={'input_container'}>
                {label && <label htmlFor={label}>{label}</label>}
                <input
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    ref={innerRef}
                    id={label}
                />
            </div>
    );
};

export default Input;