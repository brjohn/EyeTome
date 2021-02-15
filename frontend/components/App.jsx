import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import Modal from './session_form/modal';
import ProfileContainer from './profile/profile_container';

const App = () => (
    <div>
        <Modal />
        <header>   
            <HomeContainer/>
        </header>

        {/* <Switch> */}
            {/* <Route exact path="/profile/:user_id" component={ProfileContainer}/>
            <Route path="/" component={HomeContainer}/>
        </Switch> */}
    </div>
);

export default App;