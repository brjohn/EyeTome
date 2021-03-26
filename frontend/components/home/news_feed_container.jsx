import { connect } from 'react-redux';
import {fetchPosts, createPost} from '../../actions/post_actions';
import NewsFeed from './news_feed';

const mapStateToProps = ({session, entities}) => ({
    currentUser: entities.users[session.currentUser],
    posts: Object.values(entities.posts)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: (wallId) => dispatch(fetchPosts(wallId)),
    createPost: (post) => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
