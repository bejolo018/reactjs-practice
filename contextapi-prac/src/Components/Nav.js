import React, { useContext } from 'react'
import { MovieContext } from '../Context/MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div>
            <nav>
                <h3>Name</h3>
                <p> List of movies: {movies.length}</p>
            </nav>

        </div>
    )
}

export default Nav