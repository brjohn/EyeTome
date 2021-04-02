import React from 'react';
import PostList from '../posts/post_list';
import CreatePostBox from '../posts/create_post_box';

class NewsFeed extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount(){
        this.props.fetchPosts('all')
    }

    render (){
        return (
            <div className="news-feed">
                <CreatePostBox 
                openModal={this.props.openModal} 
                poster={this.props.poster} 
                postForm={this.props.postForm}/>
                <PostList 
                posts={this.props.posts} 
                currentUser={this.props.currentUser}
                deletePost={this.props.deletePost}
                />
            </div>
        )
    }
}

export default NewsFeed;