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
                <CreatePostBox openModel={this.props.openModel} poster={this.props.poster}/>
                <PostList posts={this.props.posts}/>
            </div>
        )
    }
}

export default NewsFeed;