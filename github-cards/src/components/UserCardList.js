import React from 'react';

import axios from 'axios';
import './UserCard.css'

//this component needs to fetch data from API

//Build class component to hold state followers array

class UserCardList extends React.Component {
    state={
      followers: []
    }
  
  fetchFollowers = e => {
      e.preventDefault();
      axios.get('https://api.github.com/users/Chrismis79/followers')
      .then(res => {
        console.log("This is followers res", res.data)
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err))
    };
    render(){
      return(
        <>
        <button onClick={this.fetchFollowers}>See Followers</button>
        <div className='wrapper'>    
        {this.state.followers.map(follower => (
            
          <div className="card">
            <h2>{follower.name}</h2>
            <img src={follower.avatar_url} alt="Christine's Followers"/>
            
            <div className="cardtext">
              <p>Username: {follower.login}</p>                
              <p>Followers: <a href={follower.followers_url}>Followers</a></p>
              <p>Following: <a href={follower.following_url}>Following</a></p>
            </div>
        </div>
              ))}
       
      </div>
     </>
      )
    }
}
  
export default UserCardList;