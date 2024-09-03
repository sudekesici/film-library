import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "../App.css";

function Moviedetails() {
  const movies = useSelector((state) => state.movies.movies);
  const { id } = useParams();  
  const movie = movies.find((movie) => movie.id === id);

  return (
    <div>
      {movie ? (
      <div className="movieDetailContainer" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}')`, backgroundSize: 'cover',backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',height: '500px', marginRight: '20px', marginTop: '25px'}}>
    
      <div className="contentMovie">

          <div className="poster">
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="{movie.title}" />
          </div>
  
          <div className="movieDetails">

              <div className="titleAndDate">
                  <div className="movietitle">{movie.title}</div>
                  <div className="date">{movie.date}</div>
              </div>

              <div className="score">{movie.score}</div>

              <div style={{fontSize:"20px", fontWeight:"bolder",marginBottom:"5px", marginTop:"35px"}}>Summary</div>
              <div className="overview">{movie.overview}</div>

          </div>

      </div>
  </div>
  


      ) : (
        <p style={{color:'#fff'}}>No movie found</p>
      )}
    </div>
  );
  


}export default Moviedetails;
