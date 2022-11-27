import { useState, useEffect } from 'react';

import { ThreeDots } from 'react-loader-spinner';
import { fetchMovies } from 'services/fetchMovies';
import { MoviesList } from '../MoviesList';

export const TrendingTodayMovies = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoaded(true);

        const dataMovies = await fetchMovies(
          'https://api.themoviedb.org/3/trending/all/day?api_key=084c550b6f1767443109bcf4bcaee21b'
        );

        const movies = dataMovies.results;

        setMoviesTrending([...movies]);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoaded(false);
      }
    };
    fetch();
  }, []);

  return (
    <main>
      {moviesTrending.length > 1 && (
        <MoviesList movies={moviesTrending} linkTo="movies" />
      )}
      {/* мається на увазі, що буде NavLink to="movies/:movieId".
       Тобто  <NavLink to={`${linkTo}/${movie.id}`}> у компоненті MovieList*/}

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
