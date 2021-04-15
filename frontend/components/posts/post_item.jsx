import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../comments/comment_form_container';
import CommentListContainer from '../comments/comment_list_container';
import LikeContainer from '../likes/like_container';

const postPic = (post) => {
    if (post.postPicUrl) {
        return <img src={post.postPicUrl} className="post-pic"/>
    } else {
        return null;
    }
}

const thumbnail = (poster) => {
    if (poster.profilePicUrl){
        return <img src={poster.profilePicUrl} className="thumbnail"/>
    } else {
        return <i className="fas fa-user-circle"></i>
    }
}

const likeCommentCount = (post) => {
    const commentDiv = (count) => {
        if (count === 1){
            return <div className="number-comments">1 Comment</div>
        } else if (count > 1){
            return <div className="number-comments">{count} Comments</div>
        } else {
            return <div className="number-comments"></div>
        }
    }
    const likeDiv = (count) => {
        if (count > 0){
            return (
                <div className="number-likes">
                    <i className="far fa-thumbs-up"></i>
                    {count}
                </div>
            )
        } else {
            return <div className="number-likes"></div>
        }
    }

    if (post.comments || post.likers){
        const commentNumber = post.comments ? Object.values(post.comments).length : 0;
        const likeNumber = post.likes ? Object.values(post.likes).length : 0;

        return (
            <div className="like-comment-count">
                {likeDiv(likeNumber)}
                {commentDiv(commentNumber)}
            </div>
        )
    } else {
        return null;
    }
}

const PostItem = (props) => {
    const {post, idx, deletePost, currentUser} = props 

    const displayPostOptionsIcon = (post) => {
        if (post.poster.id === currentUser ){
            return (
                <div className="edit-post-icon">
                    <i className="fas fa-ellipsis-h" ></i>
                    <ul className="post-options-dropdown">
                        <li onClick={()=>deletePost(post.id)} key={post.id}>
                            <i className="far fa-trash-alt"></i>
                            <p>Delete this post</p>
                        </li>
                    </ul>
                </div>
            )
        } else {
            return null;
        }        
    }

    return (
        <li className="post" key={idx}>
                            
            <div className="post-header-list">
                <div className="post-header-left">
                    <Link to={`/users/${post.poster.id}`} className="poster-thumbnail">
                        {thumbnail(post.poster)}
                    </Link>
                    <Link to={`/users/${post.poster.id}`} className="poster-name">
                        <div>{post.poster.first_name} {post.poster.last_name}</div> 
                    </Link>
                </div>
                {displayPostOptionsIcon(post)}
            </div>
            <div className="post-text">
                {post.body}
            </div>
            <div className="post-pic-div">{postPic(post)}</div>
            {likeCommentCount(post)}
            <div className="post-like-comment-row">
                <LikeContainer likableItem={post}/> 
                <div className="post-comment-box">
                    <p>Comment</p>
                </div>
            </div>
            <CommentListContainer post={post}/>
            <CommentFormContainer post={post} />                   
        </li>
    )
}

export default PostItem;