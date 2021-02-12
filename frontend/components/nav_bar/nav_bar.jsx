import React from 'react';
import AccountDropdown from './account-dropdown';

const NavBar = ({ currentUser, logout}) => {

    

    return (
        <header className="main-nav">
            <nav className="left-nav">
                <ul>
                    <li id="fb-icon-button">
                        <i class="fab fa-facebook"></i>
                        
                    </li>
                    <li id="search-bar">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="Search Friendbook"/>
                    </li>

                </ul>
            </nav>
            <nav className="right-nav">
                <ul>
                    <li id="user-profile-button">
                        <i class="fas fa-user-circle"></i>
                        {/* <button>{currentUser.first_name}</button> */}
                        {/* <p>Username</p> */}
                    </li>
                    <li id="account-dropdown-btn">
                        <i id="dd-icon" class="fas fa-chevron-circle-down"></i>
                        <AccountDropdown currentUser={currentUser} logout={logout}/>

                    </li>
                </ul>
            </nav>

        </header>
    )
    
}

export default NavBar;