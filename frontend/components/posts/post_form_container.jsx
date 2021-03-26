import { connect } from 'react-redux';
import {fetchPosts, createPost} from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = ({session, entities}) => ({
    poster: entities.users[session.currentUser],
    posts: Object.values(entities.posts)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: (wallId) => dispatch(fetchPosts(wallId)),
    createPost: (post) => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);