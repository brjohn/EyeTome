import React from 'react';
import { Link } from 'react-router-dom';

class CommentLike extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            likeStatus: "Like"
        }
        
        this.handleClick = this.handleClick.bind(this)
        // this.likeOrLiked = this.likeOrLiked.bind(this)
    }

    componentDidMount(){
        this.props.fetchComment(this.props.likableItem.id).then(()=> {
            const {comments, likableItem, currentUser} = this.props 
            if (comments[likableItem.id] && comments[likableItem.id].likerIds && Object.values(comments[likableItem.id].likerIds).includes(currentUser)){
                this.setState({['likeStatus']: "Unlike"})
            }
        })
    }
    handleClick(){
        const {comments, likableItem, currentUser} = this.props 
        // const comment = comments[likableItem.id]
        // debugger
        if (comments[likableItem.id] && comments[likableItem.id].likerIds && Object.values(comments[likableItem.id].likerIds).includes(currentUser)){
            let like = Object.values(comments[likableItem.id].likes).filter(like => like.liker_id === currentUser)
                this.props.deleteLike(like[0].id).then(()=> {
                this.props.fetchComment(likableItem.id)
                this.setState({['likeStatus']: "Like"})
            })
        } else {
            let like = {};
            like.likable_id = likableItem.id 
            like.liker_id = currentUser 
            like.likable_type = "Comment"
            this.props.createLike(like).then(()=> {
                this.props.fetchComment(likableItem.id)
                this.setState({['likeStatus']: "Unlike"}) 
            })
        }

    }

    render(){
        return (
            <div className="like-on-comment"  onClick={this.handleClick}>
                {/* {this.likeOrLiked()} */}
                <p>{this.state.likeStatus}</p>
                
            </div>
        )
    }
}

export default CommentLike;