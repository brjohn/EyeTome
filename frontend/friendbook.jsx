import React from "react";
import ReactDOM from "react-dom";
import {signup, login, logout} from "./actions/session_actions"
import {createPost, deletePost, updatePost, fetchPosts, fetchPost} from "./actions/post_actions"
// import {fetchPost} from "./util/post_api_util"
import configureStore from './store/store';
import Root from './components/root';
import { fetchUser, updateUser } from "./actions/user_actions";
import { createComment, deleteComment, fetchComment, fetchComments, updateComment } from "./util/comment_api_util";
import { deleteLike, createLike, fetchLike, fetchLikes } from "./actions/like_actions";
import { createRequest, deleteRequest, fetchRequest } from "./actions/request_actions";


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

   window.fetchPost = fetchPost;
   window.createRequest = createRequest;
   window.fetchRequest = fetchRequest;
   window.deleteRequest = deleteRequest;
   window.fetchUser = fetchUser;

    
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});