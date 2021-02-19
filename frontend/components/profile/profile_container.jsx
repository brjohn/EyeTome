import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import Profile from './profile';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ ui, session, entities: { users } }, ownProps) => ({
    // posts
    // friends
    profileOwner: users[ownProps.match.params.userId],
    currentUser: session.currentUser,
    profileOwnerId: ownProps.match.params.userId,
    modal: ui.modal

});

const mapDispatchToProps = dispatch => ({
    // edit profile
    // write a post
    // upload pics
    
    fetchUser: id => dispatch(fetchUser(id)),
    updateUser: user => dispatch(updateUser(user)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);