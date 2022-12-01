import { useState, useEffect, useRef } from 'react';
import { fetchMovies } from 'services/fetchMovies';

export const useTrendingTodayMovies = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        if (isFirstRender.current) {
          isFirstRender.current = false;
          return;
        }

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

  return { moviesTrending, loaded, error, isFirstRender };
};
