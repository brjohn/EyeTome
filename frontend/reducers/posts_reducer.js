import {RECEIVE_POST, RECEIVE_POSTS} from '../actions/post_actions';

const postsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_POST:
            return Object.assign({}, oldState, {[action.post.id]: action.post});
        case RECEIVE_POSTS:
            return action.posts
        default:
            return oldState;
    }
};

export default postsReducer;