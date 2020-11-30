import React, { Component } from 'react';
import SearchForm from './Components/SearchForm';
import './App.css';

const apiURL = 'https://api.lyrics.ovh/'

class App extends Component {
  
  state = {
    results: []
  }

  getSongs = (searchTerm) => {
    fetch(apiURL + `suggest/${searchTerm}`)
      .then(response => response.json())
      .then(results => this.setState({results}))
  }

  render(){
    return (
      <main className='App'>
        <h1>Lyrics Search</h1>
        <SearchForm getSongs={this.getSongs}/>
      </main>
    )
  }
}

export default App;
