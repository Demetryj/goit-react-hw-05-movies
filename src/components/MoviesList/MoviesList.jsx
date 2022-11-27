import { NavLink, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies, linkTo = false }) => {
  const location = useLocation();
  // console.log(location);

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            {linkTo ? (
              <NavLink to={`${linkTo}/${movie.id}`} state={{ from: location }}>
                {movie.title ? movie.title : movie.name}
              </NavLink>
            ) : (
              <NavLink to={`${movie.id}`} state={{ from: location }}>
                {movie.title ? movie.title : movie.name}
              </NavLink>
            )}
          </li>
        );
      })}
    </ul>
  );
};
