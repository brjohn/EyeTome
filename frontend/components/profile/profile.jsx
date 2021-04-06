// when profile renders, navbar home icon and profile button change colors
import React from 'react'
import ProfileHeader from './profile_header';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Modal from '../session_form/modal';
import PostList from '../posts/post_list';
import CreatePostBox from '../posts/create_post_box';
import RequestButtonContainer from '../requests/request_button_container';


class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // 
        }
        this.displayEditProfile = this.displayEditProfile.bind(this);
    }
    displayEditProfile(){
        
        if(parseInt(this.props.profileOwnerId) === this.props.currentUser){
            return (
                <button onClick={() => this.props.openModal('editprofile')} >
                    <i className="fas fa-pencil-alt"></i>
                    <p>Edit Profile</p>
                </button>
            )
        } else {
            // return <div className="edit-button-height"></div>;
            return <RequestButtonContainer 
            profileOwner={this.props.profileOwner}
            fullCurrentUser={this.props.fullCurrentUser}/>
        }
    }

    componentDidMount(){
        
        this.props.fetchUser(this.props.profileOwnerId)
        // this.props.fetchUser(this.props.currentUser)
        this.props.fetchPosts(parseInt(this.props.profileOwnerId))
        // this.props.fetchComments()
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
                        {this.displayEditProfile()}
                    </div>       
                </div>
                <div className="profile-below">
                    <div className="smaller-profile-below">
                        <div className="left-profile-stuff"></div>
                        <div className="right-profile">
                            <CreatePostBox 
                            openModal={this.props.openModal} 
                            poster={this.props.fullCurrentUser} 
                            postForm={parseInt(this.props.profileOwnerId)}
                            />
                           <PostList 
                           fetchPost={this.props.fetchPost}
                           posts={this.props.posts} 
                           currentUser={this.props.currentUser}
                           deletePost={this.props.deletePost}
                           createComment={this.props.createComment}
                           /> 
                        </div>
                        
                    </div>
                    

                </div>
            </div>
        )
    }}

}

export default Profile;