import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = ({ session, entities: { users } }, ownProps) => ({
    // posts
    // friends
    profileOwner: users[ownProps.match.params.userId]

});

const mapDispatchToProps = dispatch => ({
    // edit profile
    // write a post
    // upload pics
    
    fetchUser: id => dispatch(fetchUser(id)),
    updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);