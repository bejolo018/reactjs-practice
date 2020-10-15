import React, { useState } from 'react'

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
            <li>{movie.name}</li>
        ))}
        </div>

    )
}

export default MovieList