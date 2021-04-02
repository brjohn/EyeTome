import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../comments/comment_form';
import CommentFormContainer from '../comments/comment_form_container';
import CommentListContainer from '../comments/comment_list_container';
import LikeContainer from '../likes/like_container';
import PostItem from './post_item';


const PostList = (props) => {
    let allPosts = props.posts

        return (
            <ul className="all-nf-posts">
                {allPosts.reverse().map((post, idx) => {
                    return (
                        <PostItem post={post} idx={idx} currentUser={props.currentUser} deletePost={props.deletePost}/>
                    )
                })}
                
            </ul>
        
            )
    }

export default PostList;