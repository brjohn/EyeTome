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
            friends: [],
            myPosts: [] 
        }
        this.displayEditProfile = this.displayEditProfile.bind(this);
        this.displayFriends = this.displayFriends.bind(this);
        this.displayIntro = this.displayIntro.bind(this);
        this.displayEditIntro = this.displayEditIntro.bind(this);
        // this.displayPostBox = this.displayPostBox.bind(this);
    }
    componentDidUpdate(prevProps){
        if ( prevProps.profileOwnerId != this.props.profileOwnerId ){
            
            this.props.fetchUser(this.props.profileOwnerId).then(()=> {
                if (this.props.profileOwner.friendships){
                this.setState({['friends']: Object.values(this.props.profileOwner.friends)}) 
                // console.log(this.state.friends)
            }
            this.props.fetchPosts(parseInt(this.props.profileOwnerId)).then(()=> {
            let posts = this.props.posts;
            this.setState({['myPosts']: posts.reverse()})
        })
            })
        }
        if (prevProps.posts.length != this.props.posts.length){
            this.props.fetchPosts(parseInt(this.props.profileOwnerId)).then(()=> {
            let posts = this.props.posts;
            this.setState({['myPosts']: posts.reverse()})
        })}
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
    

    displayEditIntro(){
        
        if(parseInt(this.props.profileOwnerId) === this.props.currentUser){
            return (
                <button onClick={() => this.props.openModal('editprofile')} >
                    <p>Edit Intro</p>
                </button>
            )
        } else {
            return null;
        }
    }

    componentDidMount(){
        
        this.props.fetchUser(this.props.profileOwnerId).then(() => {
            
            if (this.props.profileOwner.friendships){
                this.setState({['friends']: Object.values(this.props.profileOwner.friends)}) 
                // console.log(this.state.friends)
            }
        })
        this.props.fetchPosts(parseInt(this.props.profileOwnerId)).then(()=> {
            let posts = this.props.posts;
            this.setState({['myPosts']: posts.reverse()})
        })
        this.props.fetchComments();
        // this.props.fetchUsers();
    }

    displayIntro(){
        const {profileOwner} = this.props
        return (
            <ul className="intro-ul">
                {profileOwner.work ? <li><i className="fas fa-briefcase"></i>Works at <p> {profileOwner.work}</p></li> : null}
                {profileOwner.education ? <li><i className="fas fa-graduation-cap"></i>Studied at <p> {profileOwner.education}</p></li> : null}
                {profileOwner.current_city ? <li><i className="fas fa-map-marker-alt"></i>Lives in <p> {profileOwner.current_city}</p></li> : null}
                {profileOwner.hometown ? <li><i className="fas fa-map-marker-alt"></i>From <p> {profileOwner.hometown}</p></li> : null}
                {/* <li>Birthday <p>{profileOwner.birthday}</p></li> */}
            </ul>
        )
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
                            <div className="intro-friends">
                                <div className="intro-friends-header">
                                    <h3>Intro</h3>
                                </div>
                                {this.displayIntro()}
                                <div className="edit-intro">{this.displayEditIntro()}</div> 
                            </div>
                            <div className="intro-friends">
                                <div className="intro-friends-header">
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
                            postForm='createpost'
                            />
                           <PostList 
                           fetchPost={this.props.fetchPost}
                           posts={this.state.myPosts} 
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