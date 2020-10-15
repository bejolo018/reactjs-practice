import React from 'react';
import './App.css';
import MovieList from './Components/MovieList'
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <MovieList />
    </div>
  );
}

export default App;
