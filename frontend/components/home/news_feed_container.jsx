import { connect } from 'react-redux';
import {fetchPosts} from '../../actions/post_actions';
import NewsFeed from './news_feed';

const mapStateToProps = ({session, entities}) => ({
    currentUser: session.currentUser,
    posts: Object.values(entities.posts)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: (wallId) => dispatch(fetchPosts(wallId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
