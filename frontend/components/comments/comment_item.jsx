import React from 'react';
import { Link } from 'react-router-dom';
import SubcommentFormContainer from './subcomment_form_container';
import SubcommentListContainer from './subcomment_list_container';
import CommentLikeContainer from '../likes/comment_like_container';

class CommentItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            formclass: "hidden"
        }
        this.thumbnail = this.thumbnail.bind(this);
        this.displayCommentOptionsIcon = this.displayCommentOptionsIcon.bind(this);
        this.remove = this.remove.bind(this);
        this.displaySubformContainer = this.displaySubformContainer.bind(this);
        this.likeCount = this.likeCount.bind(this);
    }

    thumbnail(poster){
        if (poster.profilePicUrl){
            return <img src={poster.profilePicUrl} className="thumbnail-comment"/>
        } else {
            return <i className="fas fa-user-circle"></i>
        }
    }

    remove(commentId){
        // console.log(commentId)
        this.props.deleteComment(commentId).then(()=> {
            this.props.fetchPost(this.props.parentItem.id)
        })
    }

    displayCommentOptionsIcon(comment){
        if (comment.commenter.id === this.props.currentUser ){
            return (
                <div className="edit-post-icon">
                    <i className="fas fa-ellipsis-h" ></i>
                    <ul className="post-options-dropdown">
                        <li onClick={() => this.remove(comment.id)}>
                            <i className="far fa-trash-alt"></i>
                            <p>Delete this comment</p>
                        </li>
                    </ul>
                </div>
            )
        } else {
            return null;
        }        
    }
    displaySubformContainer(){
        this.setState({['formclass']: "subform-div"})
    }
    likeCount(){
        if (this.props.comment.likes){
            return (
                <div className="number-likes">
                    <i className="far fa-thumbs-up"></i>
                    {Object.values(this.props.comment.likes).length}
                </div>
            )
        } else {
            return null;
        }
    }


    render(){

        return (
                    <li className="post-comment-li" key={this.props.key}>
                        <Link to={`/users/${this.props.comment.commenter_id}`} className="poster-thumbnail">
                            {this.thumbnail(this.props.comment.commenter)}
                        </Link>
                        <div className="post-comment-column">
                            <div className="post-comment-row">
                                <div className="post-comment-gray">
                                    <p className="post-comment-name">{this.props.comment.commenter.first_name} {this.props.comment.commenter.last_name}</p>
                                    <div className="post-comment-body">
                                        <div>{this.props.comment.body}</div>
                                        
                                        {/* <div className="comment-like-count">L</div> */}
                                    </div>
                                    
                                </div>
                                {this.displayCommentOptionsIcon(this.props.comment)}
                            </div>
                            <div className="like-reply">
                                <CommentLikeContainer likableItem={this.props.comment}/>
                                ·
                                <div onClick={this.displaySubformContainer}>Reply</div>
                                <div>{this.likeCount()}</div>
                                
                            </div>
                            <SubcommentListContainer comment={this.props.comment}/>
                            
                            <div className={this.state.formclass}>
                               <SubcommentFormContainer comment={this.props.comment}/> 
                            </div>
                            
                            
                        </div>
                    </li>
                )
    }
}

export default CommentItem;