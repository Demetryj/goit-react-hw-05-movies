import { NavLink } from 'react-router-dom';

export const MoviesList = ({ dataMovie }) => {
  return (
    <NavLink to="movies">
      {dataMovie.title ? dataMovie.title : dataMovie.name}
    </NavLink>
  );
};
