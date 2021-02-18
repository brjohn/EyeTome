import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import UpdateProfileForm from './update_profile_form';

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
    updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfileForm);