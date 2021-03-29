import React from 'react';
import { Link } from 'react-router-dom';

const thumbnail = (poster) => {
    if (poster.profilePicUrl){
        return <img src={poster.profilePicUrl} className="thumbnail-comment"/>
    } else {
        return <i className="fas fa-user-circle"></i>
    }
}

const CommentList = ({post}) => {
    if (post.comments){
       return (
        <ul className="post-comment-div">
            {Object.values(post.comments).map((comment, idx) => {
                return (
                    <li className="post-comment-li" key={idx}>
                        <Link to={`/users/${comment.commenter_id}`} className="poster-thumbnail">
                            {thumbnail(comment.commenter)}
                        </Link>
                        <div className="post-comment-gray">
                            <p className="post-comment-name">{comment.commenter.first_name} {comment.commenter.last_name}</p>
                            <p className="post-comment-body">{comment.body}</p>
                        </div>


                    </li>
                )
            })}
            
        </ul>
        ) 
    } else {
        return null;
    }
    
}

export default CommentList;