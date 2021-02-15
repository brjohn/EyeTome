// when profile renders, navbar home icon and profile button change colors
import React from 'react'
import ProfileHeader from './profile_header';


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
                <ProfileHeader profileOwner={this.props.profileOwner}/>
            </div>
        )
    }

}

export default Profile;