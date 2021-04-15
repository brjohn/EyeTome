import { connect } from 'react-redux';
import {fetchPosts, createPost} from '../../actions/post_actions';
import PostForm from './post_form';
import {closeModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({ui, session, entities: { users, posts }}, ownProps) => {
    // debugger
    return {
    profileOwnerId: ownProps.match.params.userId,
    fullCurrentUser: users[session.currentUser],
    posts: Object.values(posts),
    // profileOwnerId: ownProps.match.params.userId
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPosts: (wallId) => dispatch(fetchPosts(wallId)),
    createPost: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));