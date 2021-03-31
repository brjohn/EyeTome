import React from "react";
import ReactDOM from "react-dom";
import {signup, login, logout} from "./actions/session_actions"
import {createPost, deletePost, updatePost, fetchPosts} from "./actions/post_actions"
import {fetchPost} from "./util/post_api_util"
import configureStore from './store/store';
import Root from './components/root';
import { updateUser } from "./actions/user_actions";
import { createComment, deleteComment, fetchComment, fetchComments, updateComment } from "./util/comment_api_util";
import { deleteLike, createLike, fetchLike, fetchLikes } from "./actions/like_actions";


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

   window.createLike = createLike;
   window.fetchLike = fetchLike;
   window.fetchLikes = fetchLikes;
   window.deleteLike = deleteLike;
   window.updateComment = updateComment;
   window.fetchPost = fetchPost;

    
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});