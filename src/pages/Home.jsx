import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

function Home() {
    const movies = useSelector((state) => state.movies.movies);

    return (
        <div>
            <div className='homeTitle'>ALL MOVİES</div>
        <div className='homeContainer'>
            
            {movies.length > 0 ? (
                movies.map((movie) => ( 

                    <Card key={movie.id} movie={movie}></Card>
                
    
                ))
            ) : (
                <p>No movies available</p>
            )}
        </div>
        </div>
    );
}

export default Home;
