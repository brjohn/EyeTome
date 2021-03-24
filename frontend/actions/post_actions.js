import * as PostApiUtil from '../util/post_api_util'

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
});

export const receivePosts = (posts) => ({
    type: RECEIVE_POST,
    posts
});

export const createPost = (formData) => dispatch => (
    PostApiUtil.createPost(formData).then(post => dispatch(receivePost(post)))
);

export const fetchPost = (id) => dispatch => (
    PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const fetchPosts = () => dispatch => (
    PostApiUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

export const updatePost = (formData) => dispatch => (
    PostApiUtil.updatePost(formData).then(post => dispatch(receivePost(post)))
);

export const deletePost = (id) => dispatch => (
    PostApiUtil.deletePost(id).then(post => dispatch(receivePost(post)))
);