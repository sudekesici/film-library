import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import { Scrollbars } from 'react-custom-scrollbars-2';
import "../css/sidebar.css";
import { Link } from 'react-router-dom';

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
    if (!movie.category) return acc; // Eğer category undefined ise atla
    if (!acc[movie.category]) {
      acc[movie.category] = [];
    }
    acc[movie.category].push(movie);
    return acc;
  }, {});

  const filteredCategories = Object.keys(categorizedMovies).reduce((acc, category) => {
    const filteredMovies = categorizedMovies[category].filter((movie) =>
      movie.title?.toLowerCase().includes(searchTerm?.toLowerCase()) // title undefined ise atla
    );

    if (filteredMovies.length > 0) {
      acc[category] = filteredMovies;
    }

    return acc;
  }, {});

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className='flexRow search'>
        <input
          type="text"
          placeholder="Search Movies.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            color: "rgb(255, 255, 255)",
            backgroundColor: "black",
            border: "none",
            outline: "none",
            width: "250px",
            height: "50px",
            margin: "18px 20px",
            paddingLeft: "21px",
            fontSize: "16px"
          }}
        />
        <a href="#" className='sidebarIcon'><i className='fa fa-search'></i></a>
      </div>

      <Scrollbars
        style={{ height: '1000px' }} 
        autoHide
        renderThumbVertical={props => <div {...props} style={{ backgroundColor: 'gray', borderRadius: '4px' }} />}
      >
        <div className='sidebar'>
          {Object.keys(filteredCategories).map((category) => (
            <div key={category}>
              <h3 className='sidebarTitle'>{category}</h3>
              {filteredCategories[category].map((movie) => (
                <Link key={movie.id} className='sidebarButton' to={`/movie-details/${movie.id}`}>
                  {movie.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Scrollbars>
    </div>
  );
};

export default Sidebar;
