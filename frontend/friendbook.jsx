import React from "react";
import ReactDOM from "react-dom";
import {signup, login, logout} from "./actions/session_actions"
import {createPost, fetchPost, deletePost, updatePost, fetchPosts} from "./actions/post_actions"
// import {fetchPosts} from "./util/post_api_util"
import configureStore from './store/store';
import Root from './components/root';
import { updateUser } from "./actions/user_actions";
import { createComment, deleteComment, fetchComment, fetchComments, updateComment } from "./util/comment_api_util";


document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();
    let store;
    if (window.currentUser) {
        const { currentUser } = window;
        const { id } = currentUser;
        const preloadedState = {
            entities: {
                users: {
                    [id]: currentUser
                }
            },
            session: { 
                currentUser: id
                }
            };
        store = configureStore(preloadedState);

        // Clean up after ourselves so we don't accidentally use the
        // global currentUser instead of the one in the store
        delete window.currentUser;

    } else {
        store = configureStore();
    }
    
    window.getState = store.getState;
    window.dispatch = store.dispatch;

   window.createComment = createComment;
   window.fetchComment = fetchComment;
   window.fetchComments = fetchComments;
   window.deleteComment = deleteComment;
   window.updateComment = updateComment;
    
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});