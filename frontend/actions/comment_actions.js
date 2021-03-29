import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
});

export const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments 
});

export const removeComment = (comment) => ({
    type: REMOVE_COMMENT,
    comment 
});

export const createComment = (comment) => dispatch => (
    CommentApiUtil.createComment(comment).then(newComment => dispatch(receiveComment(newComment)))
);

export const fetchComment = (id) => dispatch => (
    CommentApiUtil.fetchComment(id).then(comment => dispatch(receiveComment(comment)))
);

export const fetchComments = () => dispatch => (
    CommentApiUtil.fetchComments().then(comments => dispatch(receiveComments(comments)))
);

export const updateComment = (comment) => dispatch => (
    CommentApiUtil.updateComment(comment).then(newComment => dispatch(receiveComment(newComment)))
);

export const deleteComment = (id) => dispatch => (
    CommentApiUtil.deleteComment(id).then(comment => dispatch(removeComment(comment)))
);