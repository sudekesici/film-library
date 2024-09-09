import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

function HomePage({ searchTerm }) {
    const movies = useSelector((state) => state.movies.movies);

    const filteredMovies = searchTerm
        ? movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : movies;

    return (
        <div>
            <div className='homeTitle'>
               <h2>ALL MOVIES</h2> 
             </div>
            <div className='homeContainer'>
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p style={{color:'#fff'}}>No movies available</p>
                )}
            </div>
        </div>
    );
}

export default HomePage;
