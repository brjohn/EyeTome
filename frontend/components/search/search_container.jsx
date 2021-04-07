import { connect } from 'react-redux';
import { fetchUsers } from '../../util/user_api_util';
import Search from './search';

const mapStateToProps = ({session, entities: {users}}) => {
    let myfriends = [];
    if (users[session.currentUser].friendships){
        myfriends = Object.values(users[session.currentUser].friendships)
    }
    return {
        usersArray: Object.values(users),
        friends: myfriends 
    }
    
}

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);