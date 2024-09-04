import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/card.css';

function Card({ movie }) {
    const [isHovered, setIsHovered] = useState(false);

    const backgroundImage = isHovered 
        ? `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`
        : `url(https://image.tmdb.org/t/p/w200${movie.poster_path})`;

    return (
        <Link 
            className='card' 
            to={`/movie-details/${movie.id}`}  
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        > 
            <div className={`card-container ${isHovered ? 'hovered' : 'normal'}`}  style={{backgroundImage}} >
                <p>{movie.title}</p>
            </div>
        </Link>
    );
}

export default Card;
