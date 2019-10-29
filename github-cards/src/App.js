import React from 'react';

import axios from "axios";

import UserCardList from './components/UserCardList';
import './App.css';

//this component will fetch data for me and render UserCardList

class App extends React.Component {
  
  state={
    myCard: {}
  };
  componentDidMount() {
    axios.get('https://api.github.com/users/Chrismis79')
    .then(res => {
      console.log("This is res:", res.data);
      this.setState({
        myCard: res.data
       
      });
  
    })
    .catch(error => alert("There was a problem fetching requested data", error));
  }
  render() {
  return (
    <>
    <header className="header">
      
      <p>Christine's Github User Card and Followers<span role="img" aria-label="red heart">❤️</span></p>
     
    </header>
  
      <div className="card">
    
        <div className="card-info">
          <h2>{this.state.myCard.name}</h2>
          <img src={this.state.myCard.avatar_url} alt="Christine"/> 
          
          <p>Username: {this.state.myCard.login}</p>
          <p>Location: {this.state.myCard.location}</p>
          <p>Followers: {this.state.myCard.followers}</p>
          <p>Following: {this.state.myCard.following}</p>
          
        </div>
      </div>
      <UserCardList/>
      </>
  );
  }
}

export default App;

