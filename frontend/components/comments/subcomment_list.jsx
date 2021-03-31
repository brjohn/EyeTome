import React from 'react';
import SubcommentItemContainer from './subcomment_item_container';

class SubcommentList extends React.Component {
    constructor(props){
        super(props);
    }
   

    render(){
        // debugger
        if (this.props.comment.comments){
            // console.log('comments')
        return (
        <ul className="post-comment-div">
            {Object.values(this.props.comment.comments).map((subcomment, idx) => {
                return (
                    <SubcommentItemContainer comment={subcomment} key={idx} parentItem={this.props.comment}/>
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