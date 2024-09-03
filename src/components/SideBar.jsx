import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import "../css/sidebar.css"

const Sidebar = ({ searchTerm }) => {
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

  // sadece yeni olan bu 
  const filteredCategories = Object.keys(categorizedMovies).reduce((acc, category) => {
    const filteredMovies = categorizedMovies[category].filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredMovies.length > 0) {
      acc[category] = filteredMovies;
    }

    return acc;
  }, {});

  return (
    <div className='sidebar'>
      {Object.keys(filteredCategories).map((category) => (
        <div key={category}>
          <h3 className='sidebarTitle'>{category}</h3>
          {filteredCategories[category].map((movie) => (
            <button key={movie.id} className='sidebarButton'>
              {movie.title}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
