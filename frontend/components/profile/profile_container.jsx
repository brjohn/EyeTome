import { connect } from 'react-redux';
import { fetchUser, fetchUsers, updateUser } from '../../actions/user_actions';
import Profile from './profile';
import { openModal } from '../../actions/modal_actions';
import {deletePost, fetchPost, fetchPosts} from '../../actions/post_actions';
import { fetchComments } from '../../actions/comment_actions';

const mapStateToProps = ({ ui, session, entities: { users, posts } }, ownProps) => {
    // debugger
    return {
    
    profileOwner: users[ownProps.match.params.userId],
    currentUser: session.currentUser,
    fullCurrentUser: users[session.currentUser],
    profileOwnerId: ownProps.match.params.userId,
    modal: ui.modal,
    posts: Object.values(posts)


}};

const mapDispatchToProps = dispatch => ({
    fetchUser: id => dispatch(fetchUser(id)),
    updateUser: user => dispatch(updateUser(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchPosts: (wallId) => dispatch(fetchPosts(wallId)),
    fetchComments: () => dispatch(fetchComments()),
    deletePost: (id) => dispatch(deletePost(id)),
    fetchPost: (id) => dispatch(fetchPost(id)),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);