import React from 'react';
import PostList from '../posts/post_list';
import CreatePostBox from '../posts/create_post_box';

class NewsFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friendsPosts: []
        }
        // this.posts = this.posts.bind(this);

    }
    componentDidMount(){
        this.props.fetchUser(this.props.currentUser)
        .then(()=>{
            let posts = []
            Object.values(this.props.poster.friendships).forEach(friend => {
                if (friend.authored_posts){
                    Object.values(friend.authored_posts).forEach(post => posts.push(post))
                }
            })
            debugger
            this.setState({['friendsPosts']: posts})
                console.log(this.state.friendsPosts)
                
            })
        // this.props.fetchPosts('all').then(() => console.log(this.props.posts))    
        
        
    }
    // posts(){
    //     let posts = []
    //         Object.values(this.props.poster.friendships).forEach(friend => {
    //             if (friend.authored_posts){
    //                 Object.values(friend.authored_posts).forEach(post => posts.push(post))
    //             }
    //         })
    //         console.log(posts)
    //     this.setState({['friendsPosts']: posts})
    // }

    render (){
        // const friendsPosts = this.posts();
        
        return (
            <div className="news-feed">
                <CreatePostBox 
                openModal={this.props.openModal} 
                poster={this.props.poster} 
                postForm={this.props.postForm}/>
                <PostList 
                // posts={friendsPosts}
                // posts={this.props.posts} 
                posts={this.state.friendsPosts}
                currentUser={this.props.currentUser}
                deletePost={this.props.deletePost}
                />
            </div>
        )
    }
}

export default NewsFeed;