import * as UserApiUtil from '../util/user_api_util';
import thunk from 'redux-thunk';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
});

export const fetchUser = (userId) => (dispatch) => (
    UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
)

export const updateUser = (formData) => (dispatch) => (
    UserApiUtil.updateUser(formData).then(newUser => dispatch(receiveUser(newUser)))
)

export const fetchUsers = () => (dispatch) => (
    UserApiUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
)