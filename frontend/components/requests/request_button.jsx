import React from 'react';

class RequestButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friendStatus: 'Add Friend'
        }
        this.friendAction = this.friendAction.bind(this)
    }
    componentDidMount(){
        let {profileOwner, fullCurrentUser} = this.props
        if (profileOwner.friendships && Object.values(profileOwner.friendships).some(friend => friend.id === fullCurrentUser.id)){
            this.setState({['friendStatus']: 'Unfriend'})
        }
    }

    friendAction(){
        let {profileOwner, fullCurrentUser} = this.props
        if (this.state.friendStatus === 'Add Friend'){
            let request = {};
            request.requestor_id = fullCurrentUser.id;
            request.friend_requested_id = profileOwner.id;
            this.props.createRequest(request);
            this.props.fetchUser(fullCurrentUser.id);
            this.setState({['friendStatus']: 'Request Sent'})

        } else if (this.state.friendStatus === 'Unfriend'){
            let str = Object.keys(profileOwner.friendships).find(key => profileOwner.friendships[key].id === fullCurrentUser.id)
            this.props.deleteFriendship(parseInt(str))
            this.setState({['friendStatus']: 'Add Friend'})
        }
    }

    render(){

        return(
            <button onClick={this.friendAction}>{this.state.friendStatus}</button>
        )
    }
}

export default RequestButton;