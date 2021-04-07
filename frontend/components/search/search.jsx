import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../util/user_api_util';


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery: ''
        }
    }

    searchResults(){
        this.props.usersArray.filter(user => {
            let fullName = user.first_name + ' ' + user.last_name 
            return fullName.toLocaleLowerCase().includes(this.state.searchQuery.toLocaleLowerCase())
        }).sort().map(user => {
            return (
                <li className="search-li">
                    <Link to={`/users/${user.id}`}>
                        {user.profilePicUrl ? <img src={user.profilePicUrl} /> : <i className="fas fa-user-circle"></i>}
                        <p>{user.first_name} {user.last_name}</p>
                    </Link>
                </li>
            )
        })
    }




    render(){


        return (
            <div></div>
        )
    }
}

export default Search;