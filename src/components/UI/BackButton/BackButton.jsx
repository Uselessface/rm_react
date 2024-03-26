import React from 'react';
import './BackButton.css';
import arrow from '../../../assets/icons/backArrow.svg';
import {useNavigate} from "react-router-dom";

const BackButton = () => {
    const navigate = () => {
      useNavigate()
    }

    return (
        <button className={'backbutton'} onClick={() => navigate(-1)}>
            <img src={arrow} alt=""/> <span>Назад</span>
        </button>
    );
};

export default BackButton;