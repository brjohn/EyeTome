import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from "../actions/comment_actions";


const commentsReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            const newComment = {[action.comment.id]: action.comment}
            return Object.assign({}, oldState, newComment);
        case REMOVE_COMMENT:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.comment.id];
            return nextState;
        default:
            return oldState;
    }
};

export default commentsReducer;