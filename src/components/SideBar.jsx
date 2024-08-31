import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';

function Sidebar() {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load movies.</div>;
  }

  const comedyMovies = movies.filter(movie => movie.category === 'comedy');
  const actionMovies = movies.filter(movie => movie.category === 'action');
  const animationMovies = movies.filter(movie => movie.category === 'animation');
  const horrorMovies = movies.filter(movie => movie.category === 'horror');
  const crimeMovies = movies.filter(movie => movie.category === 'crime');
  const scienceMovies = movies.filter(movie => movie.category === 'science');

  return (
    <div className="sidebar flex-column">
      <h3 className="basliklar">Comedy</h3>
      <div className="butonlar">
        {comedyMovies.map((movie) => (
          <button key={movie.title}>{movie.title}</button>
        ))}
      </div>

      <h3 className="basliklar">Action</h3>
      <div className="butonlar">
        {actionMovies.map((movie) => (
          <button key={movie.title}>{movie.title}</button>
        ))}
      </div>

      <h3 className="basliklar">Animation</h3>
      <div className="butonlar">
        {animationMovies.map((movie) => (
          <button key={movie.title}>{movie.title}</button>
        ))}
      </div>

      <h3 className="basliklar">Horror</h3>
      <div className="butonlar">
        {horrorMovies.map((movie) => (
          <button key={movie.title}>{movie.title}</button>
        ))}
      </div>

      <h3 className="basliklar">Crime</h3>
      <div className="butonlar">
        {crimeMovies.map((movie) => (
          <button key={movie.title}>{movie.title}</button>
        ))}
      </div>

      <h3 className="basliklar">Science</h3>
      <div className="butonlar">
        {scienceMovies.map((movie) => (
          <button key={movie.title}>{movie.title}</button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
