import React from 'react';
import { Link } from 'react-router-dom';


const AccountDropdown = (props) => {

    const thumbnail = () => {
        if (props.fullUser.profilePicUrl){
            return <img src={props.fullUser.profilePicUrl} className="account-dropdown-thumbnail"/>
        } else {
            return <i className="fas fa-user-circle"></i>
        }
    }

    return (
        <ul className="account-dropdown">
            <Link to={`/users/${props.fullUser.id}`}>
                <li className="profile-link">
                    {thumbnail()}
                    <div>   
                        <h3>{props.fullUser.first_name} {props.fullUser.last_name}</h3> 
                        <p>See your profile</p> 
                    </div>     
                </li>
            </Link>
            {/* <li className="feedback">
                <i className="fas fa-comment-alt"></i>
                <div>
                    <h3>Give Feedback</h3>
                    <p>Help us improve the new Friendbook</p>
                </div>
            </li> */}
            <li>
                <ul className="account-dd-choices">
                    {/* <li className="account-dd-item">
                        <i className="fas fa-cog"></i>
                        <div>Settings & Privacy</div>
                        <i className="fas fa-chevron-right"></i>  
                    </li>
                    <li className="account-dd-item">
                        <i className="fas fa-question-circle"></i>
                        <div>Help & Support</div> 
                        <i className="fas fa-chevron-right"></i>    
                    </li>
                    <li className="account-dd-item">
                        <i className="fas fa-moon"></i>
                        <div>Display & Accessibility</div> 
                        <i className="fas fa-chevron-right"></i>    
                    </li> */}
                    <li className="account-dd-item" onClick={props.logout}>
                        <i className="fas fa-sign-out-alt"></i>
                        <div>Logout</div> 
                        <div></div>   
                    </li>
                </ul>
            </li>
        </ul>
    )

}

export default AccountDropdown;
