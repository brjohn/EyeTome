// when profile renders, navbar home icon and profile button change colors
import React from 'react'
import ProfileHeader from './profile_header';
import NavBarContainer from '../nav_bar/nav_bar_container';


class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // 
        }
    }

    render(){
        return (
            <div>
                <NavBarContainer/>
                <ProfileHeader profileOwner={this.props.profileOwner}/>
            </div>
        )
    }

}

export default Profile;