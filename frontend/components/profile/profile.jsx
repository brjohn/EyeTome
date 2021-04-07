// when profile renders, navbar home icon and profile button change colors
import React from 'react'
import ProfileHeader from './profile_header';
import NavBarContainer from '../nav_bar/nav_bar_container';
import Modal from '../session_form/modal';
import PostList from '../posts/post_list';
import CreatePostBox from '../posts/create_post_box';
import RequestButtonContainer from '../requests/request_button_container';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friends: [] 
        }
        this.displayEditProfile = this.displayEditProfile.bind(this);
        this.displayFriends = this.displayFriends.bind(this);
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
        
        this.props.fetchUser(this.props.profileOwnerId).then(() => {
            if (this.props.profileOwner.friendships){
                this.setState({['friends']: Object.values(this.props.profileOwner.friendships)}) 
            }
        })
        this.props.fetchPosts(parseInt(this.props.profileOwnerId))
        // this.props.fetchComments()
    }
    
    displayFriends(){

        if (this.state.friends.length > 0){
            return (
                <ul className="friends-ul">
                    {this.state.friends.map((friend, idx) => {
                        const pic = friend.profilePicUrl ? <img src={friend.profilePicUrl} /> : <div><i className="fas fa-user"></i></div>
                        return (
                            <li className="friend-li" key={idx}>
                                <Link to={`/users/${friend.id}`} className="friend-link">
                                    {pic}
                                    <p>{friend.first_name} {friend.last_name}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )

        } else {
            return null;
        }
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
                        <div className="left-profile-stuff">
                            <div className="friends">
                                <div className="friends-header">
                                    <h3>Friends</h3>
                                    <p>{this.state.friends.length} {this.state.friends.length === 1 ? 'friend' : 'friends'}</p>
                                </div>
                                {this.displayFriends()}
                            </div>
                        </div>
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