import React from 'react';
import './NavigationLink.css'
import {Link} from "react-router-dom";
const NavigationLink = ({isActive,text,path}) => {
    return (
        <Link to={path}
            className={isActive ? `main_navigation__link active_link` : "main_navigation__link"}
        >
            {text}
        </Link>
    );
};

export default NavigationLink;