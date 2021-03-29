import React from 'react';
import { Link } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: "",
        }
        this.handleEnter = this.handleEnter.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.thumbnail = this.thumbnail.bind(this);
    }

    updateBody(){
        return e => this.setState({['body']: e.target.value})
    }

    handleSubmit(e){
        // debugger
        e.preventDefault();
        let comment = Object.assign({}, this.state)
            comment.commenter_id = this.props.fullCurrentUser.id;
            comment.commentable_type = 'Post';
            comment.commentable_id = this.props.post.id;
            this.props.createComment(comment)
            this.props.fetchPost(this.props.post.id)
            this.setState({['body']: ''})
    }

    handleEnter(e){
        
        if (e.key === 'Enter'){
            this.handleSubmit(e)
        }  
    }

    thumbnail(){
    if (this.props.fullCurrentUser.profilePicUrl){
        return <img src={this.props.fullCurrentUser.profilePicUrl} className="thumbnail-comment"/>
    } else {
        return <i className="fas fa-user-circle"></i>
    }
}

    render(){
        return (
            <form className="comment-form" onKeyPress={this.handleEnter}>
                <Link to={`/users/${this.props.fullCurrentUser}`} className="poster-thumbnail">
                    {this.thumbnail()}
                </Link>
                <input 
                type="text" 
                className="comment-form-body"
                placeholder="Write a comment..."
                value={this.state.body}
                // onKeyPress={this.handleEnter}
                onChange={this.updateBody()}
                />

            </form>
        )
    }
}

export default CommentForm;