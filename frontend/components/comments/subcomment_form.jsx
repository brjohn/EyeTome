import React from 'react';
import { Link } from 'react-router-dom';

class SubcommentForm extends React.Component {
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
        let subcomment = Object.assign({}, this.state)
            subcomment.commenter_id = this.props.fullCurrentUser.id;
            subcomment.commentable_type = 'Comment';
            subcomment.commentable_id = this.props.comment.id;
            this.props.createComment(subcomment).then(()=> {
               this.props.fetchComment(this.props.comment.id) 
            })
                
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

export default SubcommentForm;