import './FormInput.css'
// eslint-disable-next-line react/prop-types
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