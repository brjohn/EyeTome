import { connect } from 'react-redux';
import {fetchPosts, createPost} from '../../actions/post_actions';
import NewsFeed from './news_feed';
import {openModal, closeModal} from '../../actions/modal_actions'

const mapStateToProps = ({session, entities}) => ({
    poster: entities.users[session.currentUser],
    posts: Object.values(entities.posts)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: (wallId) => dispatch(fetchPosts(wallId)),
    createPost: (post) => dispatch(createPost(post)),
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
