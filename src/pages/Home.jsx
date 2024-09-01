import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Home() {
    const movies = useSelector((state) => state.movies.movies);

    return (
        <div className='HomeContainer'>
            <div>All Movies</div>
            {movies.length > 0 ? (
                movies.map((movie) => ( 
                
                    <Link key={movie.id} className='card' to={"/movie-details"}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                            
                        />
                    </Link>
                ))
            ) : (
                <p>No movies available</p>
            )}
        </div>
    );
}

export default Home;
