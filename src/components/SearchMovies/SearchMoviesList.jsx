import { NavLink } from 'react-router-dom';

export const SearchMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <NavLink to="movies/:movieId">{movie.title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};
