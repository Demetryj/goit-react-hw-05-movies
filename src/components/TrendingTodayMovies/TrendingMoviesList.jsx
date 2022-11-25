import { NavLink } from 'react-router-dom';

export const TrendingMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <NavLink to="movies/:movieId">
              {movie.title ? movie.title : movie.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
