import React, {useState, createContext} from 'react'

export const MovieContext = createContext()

export const MovieProvider = props => {
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
            <MovieContext.Provider value={[movies, setMovies]}>
                {props.children}
            </MovieContext.Provider>
    )
}
