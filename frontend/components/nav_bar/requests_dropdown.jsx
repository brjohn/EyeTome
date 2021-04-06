import React from 'react';
import RequestListItem from './request_list_item';

class RequestsDropdown extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount(){
        this.props.fetchUser(this.props.fullUser.id)
    }

    render(){
        if (this.props.fullUser.requests_received){
           return (
            
                <ul className="requests-ul">
                    <p className="friend-requests">Notifications</p>
                    {Object.entries(this.props.fullUser.requests_received).map((request, idx) => {
                        return (
                            <RequestListItem 
                            idx={idx}
                            request = {request}
                            createFriendship = {this.props.createFriendship}
                            deleteRequest = {this.props.deleteRequest}
                            fetchUser = {this.props.fetchUser}
                            currentUser = {this.props.fullUser.id}
                            />
                        )
                    })}
                </ul>
            ) 
        } else {
            return null;
        }
        
    }

}

export default RequestsDropdown;