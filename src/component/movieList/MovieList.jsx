import React from 'react';
import './MovieList.css';
import MovieCard from '../movieCard/MovieCard';

const MovieList = ({movies, searchTerm, rateSearch}) => {
    return (
        <div className="list">
            {movies
            .filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()) && movie.rate >= rateSearch)
            .map((element,i) => <MovieCard movie={element} key={i} />  )
            }
        </div>
    )
}

export default MovieList
