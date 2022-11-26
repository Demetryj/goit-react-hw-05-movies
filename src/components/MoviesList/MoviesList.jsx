import { NavLink } from 'react-router-dom';

export const MoviesList = ({ movies, linkTo = false }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            {linkTo ? (
              <NavLink to={`${linkTo}/${movie.id}`}>
                {movie.title ? movie.title : movie.name}
              </NavLink>
            ) : (
              <NavLink to={`${movie.id}`}>
                {movie.title ? movie.title : movie.name}
              </NavLink>
            )}
          </li>
        );
      })}
    </ul>
  );
};
