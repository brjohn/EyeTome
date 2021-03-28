import React from 'react';
import { Link } from 'react-router-dom';

const postPic = (post) => {
    if (post.postPicUrl) {
        return <img src={post.postPicUrl} className="post-pic"/>
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
                    
                        <i className="fas fa-ellipsis-h"></i>
                    
                </div>
            )
        } else {
            return null;
        }        
    }

        return (
            <ul className="all-nf-posts">
                {allPosts.reverse().map((post, idx) => {
                    return (
                        <li className="post" key={idx}>
                            
                            <div className="post-header-list">
                                <div className="post-header-left">
                                <Link to={`/users/${post.poster.id}`} className="poster-thumbnail">
                                    <i className="fas fa-user-circle"></i> 
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
                            
                        </li>

                    )
                })}
                
            </ul>
        
            )
    }

export default PostList;