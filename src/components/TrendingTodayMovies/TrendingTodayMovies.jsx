import { ThreeDots } from 'react-loader-spinner';
import { useTrendingTodayMovies } from 'hooks/useTrendingTodayMovies';
import MoviesList from '../MoviesList';
import { NoInfo } from 'components/NoInfo';

const TrendingTodayMovies = () => {
  const { moviesTrending, loaded, error } = useTrendingTodayMovies();

  return (
    <>
      {moviesTrending.length > 1 && (
        <MoviesList movies={moviesTrending} linkTo="movies" />
      )}
      {/* мається на увазі, що буде NavLink to="movies/:movieId".
       Тобто  <NavLink to={`${linkTo}/${movie.id}`}> у компоненті MovieList*/}

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
    </>
  );
};

export default TrendingTodayMovies;
