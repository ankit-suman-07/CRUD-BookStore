import React from 'react';
import { Link } from 'react-router-dom';
import "../css/BackButton.css";

import BackIcon from "../assets/back.png";

const BackButton = ({ destination = '/' }) => {
    return (
        <div className='back-btn'>
            <Link to={destination} className='link' >
                <img src={BackIcon} alt='image' />
            </Link>
        </div>
    )
}

export default BackButton