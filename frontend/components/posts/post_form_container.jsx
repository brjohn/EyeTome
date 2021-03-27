import { connect } from 'react-redux';
import {fetchPosts, createPost} from '../../actions/post_actions';
import PostForm from './post_form';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = ({session, entities}, ownProps) => {
    const ownerId = () => {
        if (ownProps.match){
            return ownProps.match.params.userId;
        } else {
            return session.currentUser;
        }
    }
    return {
    fullCurrentUser: entities.users[session.currentUser],
    posts: Object.values(entities.posts),
    profileOwnerId: ownerId()
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPosts: (wallId) => dispatch(fetchPosts(wallId)),
    createPost: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);