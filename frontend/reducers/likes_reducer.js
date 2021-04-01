import { RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE } from "../actions/like_actions";


const likesReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            const newLike = {[action.like.id]: action.like}
            return Object.assign({}, oldState, newLike);
        case REMOVE_LIKE:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.like.id];
            return nextState;
        default:
            return oldState;
    }
};

export default likesReducer;