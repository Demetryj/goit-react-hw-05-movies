import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovies } from 'services/fetchMovies';

export const useMovies = () => {
  const [queryMovie, setQueryMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchQuery = async () => {
      try {
        if (query === '') {
          return;
        }

        setLoaded(true);

        const dataMoviesList = await fetchMovies(
          `https://api.themoviedb.org/3/search/movie?api_key=084c550b6f1767443109bcf4bcaee21b&query=${query}&language=en-US&page=1&include_adult=false`
        );

        const moviesList = dataMoviesList.results;

        if (moviesList.length < 1) {
          toast.info(
            `Sorry, nothing found for your search "${query}" ! Try another query.`
          );
          return;
        }

        setMovies([...moviesList]);
      } catch (error) {
        console.log(error.mesage);
        setError(error);
      } finally {
        setLoaded(false);
      }
    };

    searchQuery();
  }, [query]);

  return {
    queryMovie,
    setQueryMovie,
    movies,
    loaded,
    error,
    setSearchParams,
    query,
  };
};
