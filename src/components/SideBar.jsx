import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import "../css/sidebar.css"

const Sidebar = () => {
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

  const categorizedMovies = movies.reduce((acc, movie) => {
    if (!acc[movie.category]) {
      acc[movie.category] = [];
    }
    acc[movie.category].push(movie);
    return acc;
  }, {});

  return (
    <div className='sidebar'>
      {Object.keys(categorizedMovies).map((category) => (
        <div key={category}>
          <h3 className='sidebarTitle'>{category}</h3>
          {categorizedMovies[category].map((movie) => (
            <button key={movie.title} className='sidebarButton'>
              {movie.title}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
