import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import HomeContainer from './home/home_container';
import Modal from './session_form/modal';

const App = () => (
    <div>
        <Modal />
        <header>   
            <h1>Friendbook Header</h1>
            <HomeContainer/>

        </header>
        {/* <Route path="/login" component={LoginFormContainer} /> */}
    </div>
);

export default App;