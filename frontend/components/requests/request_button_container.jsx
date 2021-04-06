import { connect } from 'react-redux';
import {createRequest} from '../../actions/request_actions';
import {deleteFriendship} from '../../actions/friendship_actions';
import RequestButton from './request_button';
import { fetchUser } from '../../actions/user_actions';

const mapDispatchToProps = dispatch => ({
    createRequest: (request) => dispatch(createRequest(request)),
    deleteFriendship: (id) => dispatch(deleteFriendship(id)),
    fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(null, mapDispatchToProps)(RequestButton);
