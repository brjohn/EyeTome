import React from 'react';

const NavBar = ({ currentUser, logout}) => {

    

    return (
        <div className="nav-bar">
            <ul>
                <li className="FB-icon">F</li>
                <li>
                    <h2>{currentUser.first_name}</h2>
                </li>
                <li>
                    <button onClick={logout}>Log Out</button>
                </li>
            </ul>

        </div>
    )
    
}

export default NavBar;