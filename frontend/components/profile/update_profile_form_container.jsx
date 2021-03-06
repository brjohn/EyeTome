import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import UpdateProfileForm from './update_profile_form';
import {closeModal} from '../../actions/modal_actions';
const mapStateToProps = ({ session, entities: { users } }, ownProps) => ({
    // posts
    // friends
    // profileOwner: users[ownProps.match.params.userId],
    currentUser: session.currentUser,
    fullUser: users[session.currentUser]
    // profileOwnerId: ownProps.match.params.userId

});

const mapDispatchToProps = dispatch => ({
    // edit profile
    // write a post
    // upload pics

    fetchUser: id => dispatch(fetchUser(id)),
    updateUser: user => dispatch(updateUser(user)),
    closeModal: () => dispatch(closeModal())
    
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfileForm);