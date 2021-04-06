import React from 'react';
import AccountDropdown from './account-dropdown';
import { Link } from 'react-router-dom';



const NavBar = ({ fullUser, logout, fetchUser}) => {
    

    const thumbnail = () => {
        if (fullUser.profilePicUrl){
            return <img src={fullUser.profilePicUrl} className="navbar-thumbnail"/>
        } else {
            return <i className="fas fa-user-circle"></i>
        }
    }
    const requestCount = () => {
        // fetchUser(fullUser.id)
        if (fullUser.requests_received){
            let count = Object.keys(fullUser.requests_received).length 
            return <div className="request-count">{count}</div>
        } else {
            return null;
        }
    }

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
                            {thumbnail()}
                            <div>{fullUser.first_name}</div> 
                        </Link>
                    </li>
                    <li className="bell">
                        <i className="fas fa-bell"></i>
                        {requestCount()}
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