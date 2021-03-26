import React from 'react';
import { Link } from 'react-router-dom';
import PostList from '../posts/post_list';

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
                <PostList posts={this.props.posts}/>
            </div>
        )
    }
}

export default NewsFeed;