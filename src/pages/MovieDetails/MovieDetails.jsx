import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { fetchMovies } from 'services/fetchMovies';
import { getGenresForDetailsMovie } from 'services/getGenresForDetailsMovie';
import { CardMovie } from 'components/CardMovie';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);
  console.log(movie);

  useEffect(() => {
    const fetch = async () => {
      try {
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
        <div>
          <CardMovie movie={movie} getGenres={getGenresForDetailsMovie} />
        </div>
      )}

      {error && <p>Something wrong. Try again later.</p>}

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
