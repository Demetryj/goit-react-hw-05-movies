import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, linkTo = false }) => {
  const location = useLocation();
  // console.log(location);

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            {linkTo ? (
              <NavLink to={`${linkTo}/${movie.id}`} state={{ from: location }}>
                {movie.title ? movie.title : movie.name}
              </NavLink>
            ) : (
              <NavLink to={`${movie.id}`} state={{ from: location }}>
                {movie.title ? movie.title : movie.name}
              </NavLink>
            )}
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
