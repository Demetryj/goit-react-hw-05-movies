import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoviesItem, List, Item } from 'components/MoviesList';

const MoviesList = ({ movies, linkTo = false }) => {
  const location = useLocation();
  // console.log(location);

  return (
    <List>
      {movies.map(movie => {
        return (
          <Item key={movie.id}>
            {linkTo ? (
              <Link
                to={`${linkTo}/${movie.id}`}
                state={{ from: location }}
                style={{
                  textDecoration: 'none',
                }}
              >
                <MoviesItem {...movie} />
              </Link>
            ) : (
              <Link to={`${movie.id}`} state={{ from: location }}>
                <MoviesItem {...movie} />
              </Link>
            )}
          </Item>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
