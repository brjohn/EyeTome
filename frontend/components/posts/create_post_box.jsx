import React from 'react';
import { Link } from 'react-router-dom';

const CreatePostBox = (props) => {

    const thumbnail = () => {
        if (props.poster.profilePicUrl){
            return <img src={props.poster.profilePicUrl} className="thumbnail"/>
        } else {
            return <i className="fas fa-user-circle"></i>
        }
    }
    console.log(props.postForm)
    return (
        <div className="post">
            <div className="make-post-top">
                <Link to={`/users/${props.poster.id}`} className="poster-thumbnail">
                    {thumbnail()}
                </Link>
                <div className="whats-on-your-mind" onClick={()=> props.openModal('createpost')}>
                    <p> What's on your mind, {props.poster.first_name}? </p>
                </div> 
            </div>
            <div className="make-post-bottom">
                <i className="far fa-file-image" onClick={()=> props.openModal('createpost')}>
                    <p>Photo</p>
                </i>
            </div>
        </div>
    )
}
export default CreatePostBox;