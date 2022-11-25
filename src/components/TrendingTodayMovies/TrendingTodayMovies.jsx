import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { fetchMovies } from '../../services/fetchMovies';
import { TrendingMoviesList } from './TrendingMoviesList';

export const TrendingTodayMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoaded(true);

        const movies = await fetchMovies(
          'https://api.themoviedb.org/3/trending/all/day?api_key=084c550b6f1767443109bcf4bcaee21b'
        );

        setMovies([...movies]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoaded(false);
      }
    };
    fetch();
  }, []);

  return (
    <main>
      <TrendingMoviesList movies={movies} />
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
