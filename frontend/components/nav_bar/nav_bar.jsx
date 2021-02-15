import React from 'react';
import AccountDropdown from './account-dropdown';

const NavBar = ({ fullUser, logout}) => {

    

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
                    <li id="home-button">
                        <i class="fas fa-home"></i>
                    </li>

                </ul>
            </nav>
            <nav className="right-nav">
                <ul>
                    <li className="user-profile-button">
                        {/* <Link to={`/users/${fullUser.id}`}>
                            <i class="fas fa-user-circle"></i>
                            <div>{fullUser.first_name}</div> 
                        </Link> */}
                        
                        <i class="fas fa-user-circle"></i>
                        <div>{fullUser.first_name}</div>
                        
                        
                        
                    </li>
                    <li id="account-dropdown-btn">
                        <i id="dd-icon" class="fas fa-chevron-circle-down"></i>
                        <AccountDropdown fullUser={fullUser} logout={logout}/>

                    </li>
                </ul>
            </nav>

        </header>
    )
    
}

export default NavBar;