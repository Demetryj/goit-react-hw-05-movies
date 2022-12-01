// import { useState, useEffect, useRef } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMovies } from 'hooks/useMovies';
import SearchBox from 'components/SearchBox';
import MoviesList from 'components/MoviesList';
import { NoInfo } from 'components/NoInfo';
// import { fetchMovies } from 'services/fetchMovies';
import { Container } from 'components/Container';

const Movies = () => {
  // const [queryMovie, setQueryMovie] = useState('');
  // const [movies, setMovies] = useState([]);
  // const [loaded, setLoaded] = useState(false);
  // const [error, setError] = useState(null);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query') ?? '';

  // const isFirstRender = useRef(true);

  // useEffect(() => {
  //   const searchQuery = async () => {
  //     try {
  //       if (isFirstRender.current) {
  //         isFirstRender.current = false;
  //         return;
  //       }

  //       if (query === '') {
  //         return;
  //       }

  //       setLoaded(true);

  //       const dataMoviesList = await fetchMovies(
  //         `https://api.themoviedb.org/3/search/movie?api_key=084c550b6f1767443109bcf4bcaee21b&query=${query}&language=en-US&page=1&include_adult=false`
  //       );

  //       const moviesList = dataMoviesList.results;

  //       if (moviesList.length < 1) {
  //         toast.info(
  //           `Sorry, nothing found for your search "${query}" ! Try another query.`
  //         );
  //         return;
  //       }

  //       setMovies([...moviesList]);
  //     } catch (error) {
  //       console.log(error.mesage);
  //       setError(error);
  //     } finally {
  //       setLoaded(false);
  //     }
  //   };

  //   searchQuery();
  // }, [query]);

  const {
    queryMovie,
    setQueryMovie,
    movies,
    loaded,
    error,
    setSearchParams,
    query,
  } = useMovies();

  const handleSubmit = event => {
    event.preventDefault();
    const normalizedValue = event.target.elements.query.value.toLowerCase();
    const nextSearchParams =
      queryMovie !== '' ? { query: normalizedValue } : {};
    setSearchParams(nextSearchParams);
  };

  return (
    <main>
      <section>
        <Container>
          <SearchBox
            handleSubmit={handleSubmit}
            value={queryMovie}
            setQueryMovie={setQueryMovie}
          />

          {query && <MoviesList movies={movies} />}

          {error && <NoInfo>Something wrong. Try again later.</NoInfo>}

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
        </Container>
      </section>
      <ToastContainer />
    </main>
  );
};

export default Movies;
