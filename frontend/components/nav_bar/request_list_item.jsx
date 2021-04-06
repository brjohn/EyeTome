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
            {/* <div className="request-li-div"> */}
            <Link to={`/users/${requestor.id}`}>
                <div className="requestor">
                    {thumbnail()}
                    <div>   
                        <div className="requestor-name">{requestor.first_name} {requestor.last_name}</div>
                    </div>     
                </div>
            </Link>
            <div className="req-response">
                <div className="accept-req" onClick={() => accept()}>Accept</div>
                <div className="delete-req" onClick={() => decline()}>Decline</div>

            {/* </div> */}
            </div>
        </li>
    )
}

export default RequestListItem;