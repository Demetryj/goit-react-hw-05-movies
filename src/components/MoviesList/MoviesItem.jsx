import PropTypes from 'prop-types';
import image from 'images/no-image-icon.jpg';
import { Poster, MovieName } from 'components/MoviesList';

export const MoviesItem = ({ poster_path, title, name }) => {
  return (
    <>
      <Poster>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : image
          }
          alt={title ? title : name}
          width="100"
        />
      </Poster>

      <MovieName>{title ? title : name}</MovieName>
    </>
  );
};

MoviesItem.propStyles = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
};
