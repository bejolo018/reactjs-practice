import React from 'react';
import './App.css';
import MovieList from './Components/MovieList'
import Nav from './Components/Nav'
import { MovieProvider } from './Context/MovieContext'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>

  );
}

export default App;
