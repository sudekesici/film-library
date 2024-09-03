import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/card.css';

function Card({ movie }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link className='card' to={`/movie-details/${movie.id}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div>
                <img
                    
                    src={`https://image.tmdb.org/t/p/w200${ isHovered ? movie.backdrop_path : movie.poster_path}`}
                    alt={movie.title}
                />
            </div>
        </Link>
    );
}

export default Card;
