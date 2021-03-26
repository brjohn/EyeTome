// when profile renders, navbar home icon and profile button change colors
import React from 'react'
import ProfileHeader from './profile_header';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Modal from '../session_form/modal';
import PostList from '../posts/post_list';


class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // 
        }
    }

    componentDidMount(){
        
        this.props.fetchUser(this.props.profileOwnerId)
        this.props.fetchPosts(parseInt(this.props.profileOwnerId))
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
                <div className="profile-nav">
                    <div className="smaller-profile-nav">
                       <button onClick={() => this.props.openModal('editprofile')} >
                            <i className="fas fa-pencil-alt"></i>
                            <p>Edit Profile</p>
                        </button> 
                    </div>       
                </div>
                <div className="profile-below">
                    <div className="smaller-profile-below">
                        <div className="left-profile-stuff"></div>
                        <div className="right-profile">
                           <PostList posts={this.props.posts}/> 
                        </div>
                        
                    </div>
                    

                </div>
            </div>
        )
    }}

}

export default Profile;