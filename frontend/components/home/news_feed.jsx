import React from 'react';
import { Link } from 'react-router-dom';
import PostList from '../posts/post_list';
import PostForm from '../posts/post_form';

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
                <div onClick={()=> this.props.openModal('createpost')}>Create Post</div>
                <PostList posts={this.props.posts}/>
            </div>
        )
    }
}

export default NewsFeed;