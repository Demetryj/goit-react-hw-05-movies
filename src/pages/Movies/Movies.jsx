import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/fetchMovies';
import { SearchBox } from 'components/SearchBox';
import { SearchMoviesList } from 'components/SearchMovies';

const Movies = () => {
  const [queryMovie, setQueryMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchQuery = async () => {
      try {
        if (query === '') {
          return;
        }

        const moviesList = await fetchMovies(
          `https://api.themoviedb.org/3/search/movie?api_key=084c550b6f1767443109bcf4bcaee21b&query=${query}&language=en-US&page=1&include_adult=false`
        );
        setMovies([...moviesList]);
      } catch (error) {}
    };

    searchQuery();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const nextSearchParams =
      queryMovie !== '' ? { query: event.target.elements.query.value } : {};
    setSearchParams(nextSearchParams);
  };

  return (
    <main>
      <SearchBox
        handleSubmit={handleSubmit}
        value={queryMovie}
        setQueryMovie={setQueryMovie}
      />
      {query && <SearchMoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
