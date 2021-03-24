import { connect } from 'react-redux';
import {fetchPosts} from '../../actions/post_actions';

const mapStateToProps = ({session, entities}) => ({
    currentUser: session.currentUser,
    posts = entities.posts
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(NewsFeed);
