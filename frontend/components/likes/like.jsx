import React from 'react';
import { Link } from 'react-router-dom';

class Like extends React.Component {
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this)
        this.likeIcon = this.likeIcon.bind(this)
    }
    likeIcon(){
        if (this.props.likableItem.likerIds && Object.values(this.props.likableItem.likerIds).includes(this.props.currentUser)){
            return <i className="fas fa-thumbs-up" ></i>
        } else {
            return <i className="far fa-thumbs-up" ></i>
        }
    }

    handleClick(){
        if (this.props.likableItem.likerIds && Object.values(this.props.likableItem.likerIds).includes(this.props.currentUser)){
            let like = Object.values(this.props.likableItem.likes).filter(like => like.liker_id === this.props.currentUser)
                this.props.deleteLike(like[0].id).then(()=> {
                this.props.fetchPost(this.props.likableItem.id)
            })
        } else {
            let like = {};
            like.likable_id = this.props.likableItem.id 
            like.liker_id = this.props.currentUser 
            like.likable_type = "Post"
            this.props.createLike(like).then(()=> {
                this.props.fetchPost(this.props.likableItem.id)  
            })
        }

        // if (!this.state.likeStatus){
        //     let like = {};
        //     like.likable_id = this.props.likableItem.id 
        //     like.liker_id = this.props.currentUser 
        //     like.likable_type = "Post"
        //     this.props.createLike(like).then(()=> {
        //         this.props.fetchPost(this.props.likableItem.id)  
        //     })
        //     this.setState({["likeStatus"]: true})
        // } else {
        //     let like = Object.values(this.props.likableItem.likes).filter(like => like.liker_id === this.props.currentUser)
        //     this.props.deleteLike(like[0].id).then(()=> {
        //         this.props.fetchPost(this.props.likableItem.id)
        //     })
        //     this.setState({["likeStatus"]: false})

        // }

    }

    render(){
        return (
            <div className="post-like-box"  onClick={this.handleClick}>
                {this.likeIcon()}
                <p>Like</p>
            </div>
        )
    }
}

export default Like;