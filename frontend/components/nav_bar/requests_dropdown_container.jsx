import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import {createFriendship} from '../../actions/friendship_actions';
import {deleteRequest} from '../../actions/request_actions';
import RequestsDropdown from './requests_dropdown';

const mapStateToProps = ({ session, entities: {users}}) => ({
    // currentUser: session.currentUser,
    fullUser: users[session.currentUser]
    
});

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    createFriendship: (friendship) => dispatch(createFriendship(friendship)),
    deleteRequest: (id) => dispatch(deleteRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestsDropdown);