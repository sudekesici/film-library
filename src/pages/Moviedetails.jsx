import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Modal from '../components/Modal';
import "../App.css";

function Moviedetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const movies = useSelector((state) => state.movies.movies);
  const { id } = useParams();  
  const movie = movies.find((movie) => movie.id === id);

  const handlePlayTrailer = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {movie ? (
        <div className="movieDetailContainer" style={{ position: 'relative', height: '500px', marginRight: '20px', marginTop: '23px' }}>
          {/* sadece opaklık için ekledim */}
          <div 
              style={{ 
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.5, 
                zIndex: -1 
              }}
            />

          <div className="contentMovie" style={{ position: 'relative', zIndex: 1 }}>
            <div className="poster">
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            </div>
      
            <div className="movieDetails">

              <div className="titleAndDate">
                <div className="movietitle">{movie.title}</div>
                <div className="date">{movie.date}</div>
              </div>
              
              
              <div className="score">{movie.score}</div>
             

              <div style={{fontSize:"20px", fontWeight:"bolder", marginBottom:"5px", marginTop:"35px"}}>Summary</div>
              <div className="overview">{movie.overview}</div>
              
              
                <button className='video' onClick={handlePlayTrailer} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <FontAwesomeIcon icon={faPlay} style={{ color: '#ffffff', marginTop:"5px" }} />
                  <p>Play Trailer</p>
                </button>
             
              
            </div>
          </div>

          {/* Modal çağırdım yerinin tasarımsal acidn onemi yok */}
          <Modal 
            isOpen={isModalOpen} 
            onClose={handleCloseModal} 
            videoUrl={`https://www.youtube.com/embed/${movie.video}`} 
          />
        </div>
      ) : (
        <p style={{color:'#fff'}}>No movie found</p>
      )}
    </div>
  );
}

export default Moviedetails;
