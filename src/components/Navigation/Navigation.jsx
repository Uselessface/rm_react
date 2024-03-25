import React from 'react';
import './Navigation.css'
import NavigationLink from "../UI/NavigationLink/NavigationLink";
function Navigation() {

    return (
        <nav className="main_navigation">
            <li className='main_navigation__item'>
                <NavigationLink
                    text={"Главная"}
                    path={'/'}
                    isActive
                />
            </li>
            <li className='main_navigation__item'>
                <NavigationLink
                    text={"О проекте"}
                    path={'/about'}
                    isActive={false}
                />
            </li>
        </nav>
    );
};

export default Navigation;