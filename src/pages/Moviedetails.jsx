import React from 'react'
import { useSelector } from 'react-redux';

function Moviedetails() {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <div>
      {movies.length>0 ? (
        movies.map((movie) => (
          <img key={movie.id} src={'https://image.tmdb.org/t/p/w200' + movie.backdrop_path } />
        ))

      ):(
        <p style={{color:'#fff'}}>no movies available</p>
      )
    }
    
     
    </div>
  )
}

export default Moviedetails