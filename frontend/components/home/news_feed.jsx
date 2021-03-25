import React from 'react';
import { Link } from 'react-router-dom';

class NewsFeed extends React.Component {
    constructor(props){
        super(props);

        this.newsFeed = this.newsFeed.bind(this);
    }
    componentDidMount(){
        this.props.fetchPosts('all')
    }

    newsFeed(){
        let allPosts = this.props.posts

        return (
            <ul className="all-nf-posts">
                {allPosts.reverse().map((post, idx) => {
                    return (
                        <li className="post" key={idx}>
                            <div className="post-header">
                                <Link to={`/users/${post.poster.id}`} className="poster-thumbnail">
                                    <i className="fas fa-user-circle"></i> 
                                </Link>
                                <Link to={`/users/${post.poster.id}`} className="poster-name">
                                    <div>{post.poster.first_name} {post.poster.last_name}</div> 
                                </Link>
                                
                                
                            </div>
                            <div className="post-text">
                                {post.body}
                            </div>
                        </li>

                    )
                })}
                
            </ul>
        
            )
    }

    render (){
        return (
            <div className="news-feed">News Feed
                {this.newsFeed()}
            </div>
        )
    }
}

export default NewsFeed;