import { connect } from 'react-redux';
import {fetchPosts, createPost} from '../../actions/post_actions';
import PostForm from './post_form';
import {closeModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = ({session, entities}, ownProps) => {
    let profileOwnerId = session.currentUser
    if (ownProps.match.params.userId){
        profileOwnerId = ownProps.match.params.userId
    }
    return {
    fullCurrentUser: entities.users[session.currentUser],
    posts: Object.values(entities.posts),
    profileOwnerId: profileOwnerId
    }
};

const mapDispatchToProps = dispatch => ({
    fetchPosts: (wallId) => dispatch(fetchPosts(wallId)),
    createPost: (post) => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));