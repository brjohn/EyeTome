import * as friendshipApiUtil from '../util/friendship_api_util';

export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";

export const receiveFriendship = (friendship) => ({
    type: RECEIVE_FRIENDSHIP,
    friendship
})

export const removeFriendship = (friendship) => ({
    type: REMOVE_FRIENDSHIP,
    friendship
})

export const createFriendship = (friendship) => dispatch => (
    friendshipApiUtil.createFriendship(friendship).then(friendship => dispatch(receiveFriendship(friendship)))
);

export const fetchFriendship = (id) => dispatch => (
    friendshipApiUtil.fetchFriendship(id).then(friendship => dispatch(receiveFriendship(friendship)))
);

export const deleteFriendship = (id) => dispatch => (
    friendshipApiUtil.deleteFriendship(id).then(friendship => dispatch(removeFriendship(friendship)))
);