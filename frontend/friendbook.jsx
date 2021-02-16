import React from "react";
import ReactDOM from "react-dom";
import {signup, login, logout} from "./actions/session_actions"
// import 
import configureStore from './store/store';
import Root from './components/root';


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
   window.signup = signup;
   window.logout = logout;
   window.login = login;
    
    
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});