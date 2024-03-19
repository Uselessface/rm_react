import React from 'react';
import './FormInput.css'
const FormInput = ({type, placeholder, required}) => {
    return (
        <input type={type} placeholder={placeholder} required={required}/>
    );
};

export default FormInput;