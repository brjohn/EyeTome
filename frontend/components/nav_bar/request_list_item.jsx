import React from 'react';
import { Link } from 'react-router-dom';

const RequestListItem = ({request, createFriendship, deleteRequest, fetchUser, currentUser, idx}) => {
    const reqId =  parseInt(request[0])

    const requestor = request[1]

    const thumbnail = () => {
        if (requestor.profilePicUrl){
            return <img src={requestor.profilePicUrl} className="requestor-thumbnail"/>
        } else {
            return <i className="fas fa-user-circle"></i>
        }
    }

    const accept = () => {
        let friendship = {}
        friendship.user_id = currentUser;
        friendship.friend_id = requestor.id 
        createFriendship(friendship).then(()=> {
            fetchUser(currentUser);
        })
        
    }

    const decline = () => {
        deleteRequest(reqId).then(() => {
           fetchUser(currentUser); 
        })
        
    }
    return (
        
        <li className="request-li" key={idx}>
            
            <Link to={`/users/${requestor.id}`}>{thumbnail()}</Link>
            <div className="request-li-col">
                <div className="requestor"> 
                    <Link to={`/users/${requestor.id}`} className="bold-name">{requestor.first_name} {requestor.last_name}</Link> sent you a friend request   
                </div>
                <div className="req-response">
                    <div className="accept-req" onClick={() => accept()}>Confirm</div>
                    <div className="delete-req" onClick={() => decline()}>Decline</div>
                </div>
            </div>
        </li>
    )
}

export default RequestListItem;