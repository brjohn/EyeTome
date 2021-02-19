// when profile renders, navbar home icon and profile button change colors
import React from 'react'
import ProfileHeader from './profile_header';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Modal from '../session_form/modal';


class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // 
        }
    }

    componentDidMount(){
        this.props.fetchUser(this.props.profileOwnerId)
    }

    render(){
        if (!this.props.profileOwner){
            return null;
        } else {
        return (
            <div>
                <Modal/>
                <NavBarContainer/>
                <ProfileHeader 
                    profileOwner={this.props.profileOwner} 
                    currentUser={this.props.currentUser}
                    profileOwnerId={this.props.profileOwnerId}
                    openModal={this.props.openModal}/>
            </div>
        )
    }}

}

export default Profile;