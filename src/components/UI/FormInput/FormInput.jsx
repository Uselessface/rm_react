import './FormInput.css'
const FormInput = ({type, placeholder, required,innerRef}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            required={required}
            ref={innerRef}
        />
    );
};

export default FormInput;