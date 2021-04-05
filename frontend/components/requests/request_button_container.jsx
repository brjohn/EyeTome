import { connect } from 'react-redux';
import {createRequest} from '../../actions/request_actions';
import {deleteFriendship} from '../../actions/friendship_actions';
import RequestButton from './request_button';

const mapDispatchToProps = dispatch => ({
    createRequest: (request) => dispatch(createRequest(request)),
    deleteFriendship: (id) => dispatch(deleteFriendship(id))
})

export default connect(null, mapDispatchToProps)(RequestButton);
