import {RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST} from '../actions/post_actions';
import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from "../actions/comment_actions";
import {RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE} from "../actions/like_actions";

const postsReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_POSTS:
            return action.posts;
        case RECEIVE_POST:
            const newPost = {[action.post.id]: action.post}
            return Object.assign({}, oldState, newPost);
        case REMOVE_POST:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.post.id];
            return nextState;
        default:
            return oldState;
    }
};

export default postsReducer;