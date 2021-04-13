import React from 'react';
import { Link } from 'react-router-dom';
import SubcommentFormContainer from './subcomment_form_container';
import CommentListContainer from './comment_list_container';
import SubcommentListContainer from './subcomment_list_container';
import CommentItemContainer from './comment_item_container';

class CommentList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: this.props.comments
        }
    }

    componentDidUpdate(prevProps){
        // debugger
        if(prevProps.comments && prevProps.comments.length != this.props.comments.length){
            this.setState({comments: this.props.comments})
        }
    }

    render(){
        // debugger
        if (this.state.comments){
            // console.log('comments')
            return (
                <ul className="post-comment-div">
                {this.state.comments.map((comment, idx) => {
                    return (
                        <CommentItemContainer comment={comment} key={idx} parentItem={this.props.post}/>
                    )
                })}
            
                </ul>
            ) 
        } else {
            return null;
        }
    }
}



export default CommentList;