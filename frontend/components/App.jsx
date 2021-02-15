import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import Modal from './session_form/modal';

const App = () => (
    <div>
        <Modal />
        <header>   
            <HomeContainer/>
        </header>
        {/* <Route path="/" component={NewsFeedContainer} />  */}
        {/* <Switch>
            <Route exact path="/login" component={LoginFormContainer}/>
        </Switch> */}
    </div>
);

export default App;