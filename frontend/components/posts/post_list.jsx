import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../comments/comment_form';
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
const commentCount = (post) => {
    if (post.comments){
        let number = Object.values(post.comments).length
        if (number === 1){
            return <div className="like-comment-count"><div className="number-comments">1 Comment</div></div>
        } else {
            return <div className="like-comment-count"><div className="number-comments">{number} Comments</div></div>
        }
    } else {
        return null;
    }
}


const PostList = (props) => {
    let allPosts = props.posts
    

    const displayPostOptionsIcon = (post) => {
        if (post.poster.id === props.currentUser ){
            return (
                <div className="edit-post-icon">
                    <i className="fas fa-ellipsis-h" ></i>
                    <ul className="post-options-dropdown">
                        <li onClick={()=>props.deletePost(post.id)}>
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
            <ul className="all-nf-posts">
                {allPosts.reverse().map((post, idx) => {
                    // props.fetchPost(post.id)
                    return (
                        <li className="post" key={idx}>
                            
                            <div className="post-header-list">
                                <div className="post-header-left">
                                <Link to={`/users/${post.poster.id}`} className="poster-thumbnail">
                                    {thumbnail(post.poster)}
                                    {/* <i className="fas fa-user-circle"></i>  */}
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
                            {commentCount(post)}
                            <div className="post-like-comment-row">
                               <LikeContainer likableItem={post}/> 
                               <div>Comment</div>
                            </div>
                            
                            <CommentListContainer post={post}/>
                            <CommentFormContainer 
                             post={post}   
                            />
                            
                        </li>

                    )
                })}
                
            </ul>
        
            )
    }

export default PostList;