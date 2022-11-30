import PropTypes from 'prop-types';
import image from 'images/no-image-icon.jpg';
import { Poster, MovieName } from 'components/MoviesList';
import Box from 'components/Box';

export const MoviesItem = ({ poster_path, title, name }) => {
  // const url = `https://image.tmdb.org/t/p/w500/${poster_path}`;
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
        />
      </Poster>

      <Box as="div" p={[2]}>
        <MovieName>{title ? title : name}</MovieName>
      </Box>
    </>
  );
};

MoviesItem.propStyles = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
};
