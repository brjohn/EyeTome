import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import Home from './home';
import { fetchUser } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchPosts: (wallId) => dispatch(fetchPosts(wallId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);