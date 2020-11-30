import React, { Component } from 'react';
import SearchForm from './Components/SearchForm';
import SongsContainer from './Components/SongsContainer';
import './App.css';

const apiURL = 'https://api.lyrics.ovh/'

class App extends Component {
  
  state = {
    results: []
  }

  getSongs = (searchTerm) => {
    fetch(apiURL + `suggest/${searchTerm}`)
      .then(response => response.json())
      .then(results => this.setState({results: results.data}))
  }

  addToFavorites = () => {
    console.log('add to favorite')
  }

  render(){
    return (
      <main className='App'>
        <header>
          <h1>Lyrics Search</h1>
          <SearchForm getSongs={this.getSongs}/>
        </header>
        <SongsContainer results={this.state.results} addToFavorites={this.addToFavorites} />
      </main>
    )
  }
}

export default App;
