import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import NewsFeedContainer from './news_feed_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    // this.props.fetchUsers()
    this.props.fetchUser(this.props.currentUser);
    this.props.fetchPosts('all');
  }

    render(){
        return (
            <div>
              <NavBarContainer/>
              <div className="home-below-nav">
                <NewsFeedContainer/>
              </div>
                   
            </div>
        
        )
    }

}

export default Home;