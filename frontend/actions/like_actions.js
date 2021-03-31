import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
});

export const receiveLikes = (likes) => ({
    type: RECEIVE_LIKES,
    likes 
});

export const removeLike = (like) => ({
    type: REMOVE_LIKE,
    like 
});

export const createLike = (like) => dispatch => (
    LikeApiUtil.createLike(like).then(newLike => dispatch(receiveLike(newLike)))
);

export const fetchLike = (id) => dispatch => (
    LikeApiUtil.fetchLike(id).then(like => dispatch(receiveLike(like)))
);

export const fetchLikes = () => dispatch => (
    LikeApiUtil.fetchLikes().then(likes => dispatch(receiveLikes(likes)))
);

export const deleteLike = (id) => dispatch => (
    LikeApiUtil.deleteLike(id).then(like => dispatch(removeLike(like)))
);