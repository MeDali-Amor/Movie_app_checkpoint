import React from 'react';
import './movieCard.css';
import { Button } from "react-bootstrap";

const MovieCard = ({movie}) => {
    return (
        
            <div  className="card">
                <img variant="top" src={movie.posterUrl} className="image" />
                <h5 className="title">{movie.title}</h5>
                
                <div className="description">
                    {movie.description}
                </div>
                
                <div className="footer">
                    <Button variant="primary">Watch</Button>
                    {"⭐".repeat(movie.rate) }
                </div>
            </div>
        
    )
}

export default MovieCard
