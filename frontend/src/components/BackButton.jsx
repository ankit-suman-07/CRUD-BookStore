import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import "../css/BackButton.css";

import BackIcon from "../assets/back.png";

const BackButton = ({ destination = '/' }) => {
    return (
        <div className='back-btn'>
            <Link to={destination} className='link' >
                <img src={BackIcon} />
            </Link>
        </div>
    )
}

export default BackButton