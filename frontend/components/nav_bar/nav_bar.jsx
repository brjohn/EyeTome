import React from 'react';
import AccountDropdown from './account-dropdown';
import { Link } from 'react-router-dom';

const NavBar = ({ fullUser, logout}) => {

    

    return (
        <header className="main-nav">
            <nav className="left-nav">
                <ul>
                    <li id="fb-icon-button">
                        <i className="fab fa-facebook"></i>
                        
                    </li>
                    <li id="search-bar">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Search Friendbook"/>
                    </li>
                    <li >
                        <Link to="/" id="home-button"><i className="fas fa-home"></i></Link>    
                    </li>

                </ul>
            </nav>
            <nav className="right-nav">
                <ul>
                    <li >
                        <Link to={`/users/${fullUser.id}`} className="user-profile-button">
                            <i className="fas fa-user-circle"></i>
                            <div>{fullUser.first_name}</div> 
                        </Link>
                        
                        {/* <i className="fas fa-user-circle"></i>
                        <div>{fullUser.first_name}</div> */}
                        
                        
                        
                    </li>
                    <li id="account-dropdown-btn">
                        <i id="dd-icon" className="fas fa-chevron-circle-down"></i>
                        <AccountDropdown fullUser={fullUser} logout={logout}/>

                    </li>
                </ul>
            </nav>

        </header>
    )
    
}

export default NavBar;