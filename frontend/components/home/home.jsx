import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import NavBarContainer from '../nav_bar/nav_bar_container';
import NavBar from '../nav_bar/nav_bar';

const Home = ({currentUser, closeModal}) => {

    if (currentUser) {
        closeModal();
        return <NavBarContainer/>
    } else {
        return <LoginFormContainer/>;
    }

}

export default Home;