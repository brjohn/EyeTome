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
                <div className="post">
                    <div className="make-post-top">
                       <div className="poster-thumbnail">
                            <i className="fas fa-user-circle"></i> 
                        </div>
                        <div className="whats-on-your-mind" onClick={()=> this.props.openModal('createpost')}>
                            <p> What's on your mind, {this.props.poster.first_name}? </p>
                        </div> 
                    </div>
                    <div className="make-post-bottom">
                        <i className="far fa-file-image">
                            <p>Photo</p>
                        </i>
                    </div>
                     
                </div>
                
                <PostList posts={this.props.posts}/>
            </div>
        )
    }
}

export default NewsFeed;