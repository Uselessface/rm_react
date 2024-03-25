import React from 'react';
import logo from "../../assets/icons/logo.png";

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="" className="logo__img"/>
        </div>
    );
};

export default Logo;