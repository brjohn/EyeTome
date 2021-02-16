import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Modal from './session_form/modal';
import ProfileContainer from './profile/profile_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <header>   
            {/* <HomeContainer/> */}
        </header>

        <Switch>
            
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
            <ProtectedRoute exact path="/users/:userId" component={ProfileContainer}/>
            <ProtectedRoute exact path="/" component={HomeContainer}/>
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;