import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { fetchMovies } from 'services/fetchMovies';
import { getGenresForDetailsMovie } from 'services/getGenresForDetailsMovie';
import CardMovie from 'components/CardMovie';
import { NoInfo } from 'components/NoInfo';
import { Container } from 'components/Container';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        if (isFirstRender.current) {
          isFirstRender.current = false;
          return;
        }

        setLoaded(true);

        const dataMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=084c550b6f1767443109bcf4bcaee21b&language=en`
        );
        console.log(dataMovie);
        setMovie(dataMovie);
      } catch (error) {
        console.log(error.message);
        setError(error);
      } finally {
        setLoaded(false);
      }
    };

    fetch();
  }, [movieId]);

  return (
    <main>
      {movie && (
        <CardMovie movie={movie} getGenres={getGenresForDetailsMovie} />
      )}

      {error && (
        <Container>
          <NoInfo>Something wrong. Try again later.</NoInfo>
        </Container>
      )}

      {loaded && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="blue"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: 'center' }}
          visible={true}
        />
      )}
    </main>
  );
};

export default MovieDetails;
