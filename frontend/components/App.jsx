import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import NewsFeedContainer from './news_feed/news_feed_container';
import Modal from './session_form/modal';

const App = () => (
    <div>
        <Modal />
        <header>   
            {/* <h1>Friendbook Header</h1> */}
            <NewsFeedContainer/>

        </header>
        <Route path="/" component={NewsFeedContainer} /> 
    </div>
);

export default App;