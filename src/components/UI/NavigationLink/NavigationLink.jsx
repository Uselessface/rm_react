import React from 'react';
import './NavigationLink.css'
import {NavLink} from "react-router-dom";
const NavigationLink = ({text,path}) => {
    return (
        <NavLink to={path}
            className={({isActive}) => (isActive ? `main_navigation__link active_link` : "main_navigation__link")}
        >
            {text}
        </NavLink>
    );
};

export default NavigationLink;