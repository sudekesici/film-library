import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Card({ movie }) {
    return (
        <Link className='card' to={`/movie-details/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
        </Link>
    );
}

export default Card;
