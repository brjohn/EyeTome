import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Profile from './profile';

const mapStateToProps = ({ session, entities: { users } }) => ({
    // posts
    // friends
    fullUser: users[session.currentUser]

});

const mapDispatchToProps = dispatch => ({
    // edit profile
    // write a post
    // upload pics
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);