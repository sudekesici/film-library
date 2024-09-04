import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import "../css/sidebar.css"

const Sidebar = ({ searchTerm, setSearchTerm }) => {
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

    <div >
        
        <div className='flexRow search'>
            <input 
              type="text" 
              placeholder="Search Movies.." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ color: "rgb(255, 255, 255)", backgroundColor: "black", border: "none", outline: "none", width: "250px", margin: "24px 20px", padding: "10px" }} 
            />
              <a href="" className='sidebarİcon'><i className='fa fa-search'></i></a>
         </div>

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

    </div>
   
  );
};

export default Sidebar;
