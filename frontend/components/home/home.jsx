import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import NewsFeedContainer from './news_feed_container';

const Home = ({currentUser, closeModal}) => {

    
        return (
            <div>
              <NavBarContainer/>
              <div className="home-below-nav">
                <NewsFeedContainer/>
              </div>
                   
            </div>
        
        )
    

}

export default Home;