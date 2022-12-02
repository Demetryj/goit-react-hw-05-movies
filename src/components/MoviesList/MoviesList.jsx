import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoviesItem, List, Item, LinkItem } from 'components/MoviesList';

const MoviesList = ({ movies, linkTo = false }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => {
        return (
          <Item key={movie.id}>
            {linkTo ? (
              <LinkItem to={`${linkTo}/${movie.id}`} state={{ from: location }}>
                <MoviesItem {...movie} />
              </LinkItem>
            ) : (
              <LinkItem to={`${movie.id}`} state={{ from: location }}>
                <MoviesItem {...movie} />
              </LinkItem>
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
