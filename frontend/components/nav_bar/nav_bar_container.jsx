import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session, entities: {users}}) => ({
    // currentUser: session.currentUser,
    fullUser: users[session.currentUser]
    
});

const mapDispatchToProps = dispatch => ({
    
    logout: () => dispatch(logout()),
    fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);