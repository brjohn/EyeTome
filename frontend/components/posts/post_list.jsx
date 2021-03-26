import React from 'react';
import { Link } from 'react-router-dom';

const PostList = (props) => {
        let allPosts = props.posts

        return (
            <ul className="all-nf-posts">
                {allPosts.reverse().map((post, idx) => {
                    return (
                        <li className="post" key={idx}>
                            <div className="post-header">
                                <Link to={`/users/${post.poster.id}`} className="poster-thumbnail">
                                    <i className="fas fa-user-circle"></i> 
                                </Link>
                                <Link to={`/users/${post.poster.id}`} className="poster-name">
                                    <div>{post.poster.first_name} {post.poster.last_name}</div> 
                                </Link>
                    
                            </div>
                            <div className="post-text">
                                {post.body}
                            </div>
                        </li>

                    )
                })}
                
            </ul>
        
            )
    }

export default PostList;