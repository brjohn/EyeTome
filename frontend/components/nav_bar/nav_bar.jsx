import React from 'react';

const NavBar = ({ currentUser, logout}) => {

    

    return (
        <header className="main-nav">
            <nav className="left-nav">
                <ul>
                    <li id="fb-icon-button">
                        <i class="fab fa-facebook"></i>
                        
                    </li>
                    <li id="search-bar">Search bar
                        {/* search icon, rounded button */}
                    </li>

                </ul>
            </nav>
            <nav className="right-nav">
                <ul>
                    <li id="user-profile-button">
                        <button>{currentUser.first_name}</button>
                    </li>
                    <li id="account-dropdown-btn">
                        <i class="fas fa-chevron-circle-down"></i>
                        {/* render account dropdown component */}

                    </li>
                </ul>
            </nav>

        </header>
    )
    
}

export default NavBar;