import {combineReducers} from 'redux';
import commentsReducer from './comments_reducer';
import postsReducer from './posts_reducer';

import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
});

export default entitiesReducer;