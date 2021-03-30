import React from 'react';
import { Link } from 'react-router-dom';
import SubcommentFormContainer from './subcomment_form_container';
import CommentListContainer from './comment_list_container';

class SubcommentList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            formclass: "hidden"
        }

        this.thumbnail = this.thumbnail.bind(this);
        this.displayCommentOptionsIcon = this.displayCommentOptionsIcon.bind(this);
        this.remove = this.remove.bind(this);
        this.displaySubformContainer = this.displaySubformContainer.bind(this);
    }
    
    
    thumbnail(poster){
        if (poster.profilePicUrl){
            return <img src={poster.profilePicUrl} className="thumbnail-comment"/>
        } else {
            return <i className="fas fa-user-circle"></i>
        }
    }

    remove(subcommentId){
        
        this.props.deleteComment(subcommentId).then(()=> {
            this.props.fetchComment(this.props.comment.id)
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

    render(){
        // debugger
        if (this.props.comment.comments){
            // console.log('comments')
        return (
        <ul className="post-comment-div">
            {Object.values(this.props.comment.comments).map((subcomment, idx) => {
                return (
                    <li className="post-comment-li" key={idx}>
                        <Link to={`/users/${subcomment.commenter_id}`} className="poster-thumbnail">
                            {this.thumbnail(subcomment.commenter)}
                        </Link>
                        <div className="post-comment-column">
                            <div className="post-comment-row">
                                <div className="post-comment-gray">
                                    <p className="post-comment-name">{subcomment.commenter.first_name} {subcomment.commenter.last_name}</p>
                                    <p className="post-comment-body">{subcomment.body}</p>
                                </div>
                                {this.displayCommentOptionsIcon(subcomment)}
                            </div>
                            <div className="like-reply">
                                <p onClick={this.displaySubformContainer}>Reply</p>
                            </div>
                            <div className={this.state.formclass}>
                               <SubcommentFormContainer comment={subcomment}/> 
                            </div>
                            
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
}



export default SubcommentList;