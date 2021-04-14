import React from 'react';
import AccountDropdown from './account-dropdown';
import { Link } from 'react-router-dom';
import RequestsDropdownContainer from './requests_dropdown_container';
import SearchContainer from '../search/search_container';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usersArray: Object.values(this.props.users)
        }
        
        this.thumbnail = this.thumbnail.bind(this);
        this.requestCount = this.requestCount.bind(this);
        
    }
    
    componentDidMount(){
        // debugger
        this.props.fetchUsers().then(()=> {
            // debugger
            this.setState({['usersArray']: Object.values(this.props.users)})
            // debugger
            console.log('success')
        })
        this.props.fetchUser(this.props.fullUser.id)
    }

    thumbnail(){
        if (this.props.fullUser.profilePicUrl){
            return <img src={this.props.fullUser.profilePicUrl} className="navbar-thumbnail"/>
        } else {
            return <i className="fas fa-user-circle"></i>
        }
    }
    requestCount(){
        if (this.props.fullUser.requests_received){
            let count = Object.keys(this.props.fullUser.requests_received).length 
            return <div className="request-count">{count}</div>
        } else {
            return null;
        }
    }
    render(){
        return (
        <header className="main-nav">
            <nav className="left-nav">
                <ul>
                    <li id="fb-icon-button">
                        <i className="fab fa-facebook"></i>   
                    </li>
                    <SearchContainer />
                    <li >
                        <Link to="/" id="home-button"><i className="fas fa-home"></i></Link>    
                    </li>
                </ul>
            </nav>
            <nav className="right-nav">
                <ul>
                    <li key="a">
                        <Link to={`/users/${this.props.fullUser.id}`} className="user-profile-button">
                            {this.thumbnail()}
                            <div>{this.props.fullUser.first_name}</div> 
                        </Link>
                    </li>
                    <li className="notifications" key="b">
                        <i id="bell" className="fas fa-bell"></i>
                        {this.requestCount()}
                        <RequestsDropdownContainer />
                    </li>
                    <li id="account-dropdown-btn" key="c">
                        <i id="dd-icon" className="fas fa-chevron-circle-down"></i>
                        <AccountDropdown fullUser={this.props.fullUser} logout={this.props.logout}/>

                    </li>
                </ul>
            </nav>

        </header>
        )
    }
    
    
}

export default NavBar;