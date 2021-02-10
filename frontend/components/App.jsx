import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        {/* <Modal /> */}
        <header>Welcome to Friendbook, this is the App Component</header>
        <Route path="/login" component={LoginFormContainer} />
    </div>
);

export default App;