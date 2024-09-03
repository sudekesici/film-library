import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/card.css';

function Card({ movie }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link 
  className='card' 
  to={`/movie-details/${movie.id}`}  
  onMouseEnter={() => setIsHovered(true)} 
  onMouseLeave={() => setIsHovered(false)}
> 
{/* ishovereda baglı olarak ek bir class daha ekledim. */}
  <div className={`card-container ${isHovered ? 'hovered' : 'normal'}`}>
    <img
      src={isHovered 
            ? `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}` 
            : `https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      alt={movie.title}
    />
  </div>
</Link>

      
      
    );
}

export default Card;
