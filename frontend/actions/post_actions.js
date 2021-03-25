import * as PostApiUtil from '../util/post_api_util'

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REMOVE_POST = "REMOVE_POST"

export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
});

export const receivePosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
});

export const removePost = (post) => ({
    type: REMOVE_POST,
    post
})

export const createPost = (post) => dispatch => (
    PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)))
);

export const fetchPost = (id) => dispatch => (
    PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const fetchPosts = (wallId) => dispatch => (
    PostApiUtil.fetchPosts(wallId).then(posts => dispatch(receivePosts(posts)))
);

export const updatePost = (post) => dispatch => (
    PostApiUtil.updatePost(post).then(post => dispatch(receivePost(post)))
);

export const deletePost = (id) => dispatch => (
    PostApiUtil.deletePost(id).then(post => dispatch(removePost(post)))
);