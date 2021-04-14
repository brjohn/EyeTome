import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session, entities: {users}}) => ({
    // currentUser: session.currentUser,
    fullUser: users[session.currentUser],
    users: users
    
});

const mapDispatchToProps = dispatch => ({
    
    logout: () => dispatch(logout()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);