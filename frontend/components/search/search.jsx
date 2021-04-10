import React from 'react';
import { Link } from 'react-router-dom';


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchQuery: '',
            displayResults: false
        }
        this.isFriend = this.isFriend.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.closeResults = this.closeResults.bind(this);
    }
    isFriend(userId){
        if (this.props.friends.some(friend => friend.id === userId)){
            return <p className="is-friend">friend</p>
        } else {
            return <p className="is-friend"></p>
        }
    }
    closeResults(e){
        
        this.setState({['displayResults']: false})
        e.stopPropagation();
        
    }

    searchResults(){
        const resultsArray = this.props.usersArray.filter(user => {
            debugger
                let fullName = user.first_name + ' ' + user.last_name 
                return fullName.toLocaleLowerCase().includes(this.state.searchQuery.toLocaleLowerCase())
            })
        
        if (resultsArray.length > 0){
            return (
                resultsArray.sort().map(user => {
                    return (
                        <div className="search-item" key={user.id}>
                            <Link to={`/users/${user.id}`}>
                                {user.profilePicUrl ? <img src={user.profilePicUrl} /> : <i className="fas fa-user-circle"></i>}
                            </Link>
                            <Link to={`/users/${user.id}`} >
                                <div className="search-item-name">
                                    <p>{user.first_name} {user.last_name}</p>
                                    {this.isFriend(user.id)}
                                </div>
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
        if (e.currentTarget.value.length > 0){
            this.setState({['displayResults']: true})
        }
    }

    render(){

        return (
            <div className="search-exterior" onClick={this.closeResults}>
               <div className="search-interior">
                   <div className="search-bar">
                       <i className="fas fa-search"></i>
                       <input 
                        type="search"
                        className="search-input"
                        value={this.state.searchQuery}
                        placeholder="Search Friendbook"
                        onChange={this.handleChange}
                        />
                   </div>
                    
                    <div className="search-results">
                        {this.state.displayResults ? this.searchResults() : null}
                    </div>
                </div> 
            </div> 
            
        )
    }
}

export default Search;