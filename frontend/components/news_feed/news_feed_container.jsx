import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import NewsFeed from './news_feed';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    closeModal: modal => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsFeed);