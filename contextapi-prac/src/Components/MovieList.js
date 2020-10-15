import React, { useState } from 'react'
import Movie from './Movie'

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            name: 'movie1',
            price: '123',
            id: 411
        },
        {
            name: 'movie2',
            price: '123',
            id: 412
        },
        {
            name: 'movie3',
            price: '123',
            id: 413
        },
    ])

    return (
        <div>
        {movies.map(movie => (
            <Movie key={movie.id} name={movie.name} price={movie.price}/>
        ))}
        </div>

    )
}

export default MovieList