import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import NewsFeedContainer from './news_feed_container';

const Home = ({currentUser, closeModal}) => {

    
        return (
            <div>
              <NavBarContainer/>
                <NewsFeedContainer/>   
            </div>
        
        )
    

}

export default Home;