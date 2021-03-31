import React from 'react';
import { Link } from 'react-router-dom';
import SubcommentFormContainer from './subcomment_form_container';
import CommentListContainer from './comment_list_container';
import SubcommentListContainer from './subcomment_list_container';
import CommentItemContainer from './comment_item_container';

class CommentList extends React.Component {
    constructor(props){
        super(props);
    }

    

    render(){
        // debugger
        if (this.props.post.comments){
            // console.log('comments')
            return (
                <ul className="post-comment-div">
                {Object.values(this.props.post.comments).map((comment, idx) => {
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