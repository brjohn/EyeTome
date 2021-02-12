import React from 'react';


const AccountDropdown = (props) => {

    return (
        <ul className="account-dropdown">
            <li className="profile-link">
                <i class="fas fa-user-circle"></i>
                <div>   
                   <h3>{props.currentUser.first_name} {props.currentUser.last_name}</h3> 
                    <p>See your profile</p> 
                </div>
                  
            </li>
            <li className="feedback">
                <i class="fas fa-comment-alt"></i>
                <div>
                    <h3>Give Feedback</h3>
                    <p>Help us improve the new Friendbook</p>
                </div>
            </li>
            <li>
                <ul className="account-dd-choices">
                    <li className="account-dd-item">
                        <i class="fas fa-cog"></i>
                        <div>Settings & Privacy</div>
                        <i class="fas fa-chevron-right"></i>  
                    </li>
                    <li className="account-dd-item">
                        <i class="fas fa-question-circle"></i>
                        <div>Help & Support</div> 
                        <i class="fas fa-chevron-right"></i>    
                    </li>
                    <li className="account-dd-item">
                        <i class="fas fa-moon"></i>
                        <div>Display & Accessibility</div> 
                        <i class="fas fa-chevron-right"></i>    
                    </li>
                    <li className="account-dd-item" onClick={props.logout}>
                        <i class="fas fa-sign-out-alt"></i>
                        <div>Logout</div> 
                        <div></div>   
                    </li>
                </ul>
            </li>
        </ul>
    )

}

export default AccountDropdown;
