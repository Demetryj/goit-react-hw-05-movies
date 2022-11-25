import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/fetchMovies';
import { MoviesList } from './MoviesItem';

export const TrendingTodayMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const movies = await fetchMovies(
          'https://api.themoviedb.org/3/trending/all/day?api_key=084c550b6f1767443109bcf4bcaee21b'
        );

        setMovies([...movies]);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, []);

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <MoviesList dataMovie={movie} />
          </li>
        );
      })}
    </ul>
  );
};
