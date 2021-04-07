import { connect } from 'react-redux';
import { fetchUsers } from '../../util/user_api_util';
import Search from './search';

const mapStateToProps = ({entities: {users}}) => ({
    usersArray: Object.values(users)
})

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);