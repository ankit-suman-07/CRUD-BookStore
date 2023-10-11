import React from 'react';
import "../css/NavBar.css";

const NavBar = ({ pagename }) => {
    return (
        <div className='navbar' >
            <div className='logo' >
                Books.
            </div>
            <div className='page' >
                <span>{pagename}</span>
            </div>
        </div>
    )
}

export default NavBar