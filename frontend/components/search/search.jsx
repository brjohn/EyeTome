import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../util/user_api_util';


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery: '',
            displayResults: false
        }
        this.isFriend = this.isFriend.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    isFriend(userId){
        if (this.props.friends.some(friend => friend.id === userId)){
            return <p className="is-friend">friend</p>
        } else {
            return <p className="is-friend"></p>
        }
    }

    searchResults(){
        const resultsArray = this.props.usersArray.filter(user => {
                let fullName = user.first_name + ' ' + user.last_name 
                return fullName.toLocaleLowerCase().includes(this.state.searchQuery.toLocaleLowerCase())
            })
        
        if (resultsArray.length > 0){
            return (
                resultsArray.sort().map(user => {
                    return (
                        <div className="search-item">
                            <Link to={`/users/${user.id}`}>
                                {user.profilePicUrl ? <img src={user.profilePicUrl} /> : <i className="fas fa-user-circle"></i>}
                                <p>{user.first_name} {user.last_name}</p>
                                {this.isFriend(user.id)}
                            </Link>
                        </div>
                    )
                })
            )
        } else {
            return <div className="search-item">No matches found</div>
        }
        
    }

    handleChange(e){
        this.setState({['searchQuery']: e.currentTarget.value})
    }


    render(){


        return (
            <div >
                <input 
                type="search"
                className="search-input"
                value={this.state.searchQuery}
                placeholder="Search Friendbook"
                onChange={this.handleChange}
                onFocus={() => this.setState({['displayResults']: true})}
                />
                <div className="search-results">
                    {this.state.displayResults ? this.searchResults() : null}
                </div>
            </div>
        )
    }
}

export default Search;