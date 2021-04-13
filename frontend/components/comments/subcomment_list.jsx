import React from 'react';
import SubcommentItemContainer from './subcomment_item_container';

class SubcommentList extends React.Component {
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
            {Object.values(this.state.comments).map((subcomment, idx) => {
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