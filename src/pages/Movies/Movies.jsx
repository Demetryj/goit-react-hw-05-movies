import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMovies } from 'services/fetchMovies';
import { SearchBox } from 'components/SearchBox';
import { SearchMoviesList } from 'components/SearchMovies';

const Movies = () => {
  const [queryMovie, setQueryMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchQuery = async () => {
      try {
        if (query === '') {
          return;
        }

        setLoaded(true);

        const moviesList = await fetchMovies(
          `https://api.themoviedb.org/3/search/movie?api_key=084c550b6f1767443109bcf4bcaee21b&query=${query}&language=en-US&page=1&include_adult=false`
        );

        if (moviesList.length < 1) {
          toast.info(
            `Sorry, nothing found for your search "${query}" ! Try another query.`
          );
          return;
        }

        setMovies([...moviesList]);
      } catch (error) {
        console.log(error.mesage);
      } finally {
        setLoaded(false);
      }
    };

    searchQuery();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const normalizedValue = event.target.elements.query.value.toLowerCase();

    const nextSearchParams =
      queryMovie !== '' ? { query: normalizedValue } : {};
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
      <ToastContainer />
    </main>
  );
};

export default Movies;
