import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';

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
    <div style={{ width: '200px', padding: '10px', backgroundColor: '#f0f0f0' }}>
      {Object.keys(categorizedMovies).map((category) => (
        <div key={category}>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          {categorizedMovies[category].map((movie) => (
            <button key={movie.title} style={{ display: 'block', marginBottom: '5px' }}>
              {movie.title}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
