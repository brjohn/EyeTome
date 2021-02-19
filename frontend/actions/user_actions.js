import * as UserApiUtil from '../util/user_api_util';
import thunk from 'redux-thunk';

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

export const fetchUser = (userId) => (dispatch) => (
    UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
)

export const updateUser = (formData) => (dispatch) => (
    UserApiUtil.updateUser(formData).then(newUser => dispatch(receiveUser(newUser)))
)