import React, {useState} from 'react';
import './Navigation.css'
import NavigationLink from "../UI/NavigationLink/NavigationLink";
function Navigation() {
    return (
        <nav className="main_navigation">
            <li className='main_navigation__item'>
                <NavigationLink
                    text={"Главная"}
                    path={'/'}
                />
            </li>
            <li className='main_navigation__item'>
                <NavigationLink
                    text={"О проекте"}
                    path={'/about-us'}
                />
            </li>
        </nav>
    );
};

export default Navigation;