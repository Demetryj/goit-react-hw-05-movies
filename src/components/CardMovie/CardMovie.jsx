import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import image from 'images/no-image-icon.jpg';
import { getDateYear } from 'services/getDateYear';
import { getScore } from 'services/getScore';

export const CardMovie = ({
  movie: {
    title,
    poster_path,
    release_date = null,
    vote_average = null,
    overview,
    genres,
  },
  getGenres,
}) => {
  const location = useLocation();

  return (
    <>
      <div>
        <Link to={location.state?.from ?? '/'}>
          {/* <NavLink to={location.state?.from ?? "/"}>  вказувати альтернативний варіант шляху*/}
          <div>
            <p>Go back</p>
          </div>
        </Link>
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : image
            }
            alt={title}
            width="300"
          />
        </div>
        <div>
          <p>
            {release_date ? `${title} (${getDateYear(release_date)})` : title}
          </p>
          <p>
            {vote_average
              ? `User Score: ${getScore(vote_average)}% `
              : 'User Score: no score'}
          </p>
          <p>Overview</p>
          <p>{overview ? overview : 'No overview'}</p>
          <p>Genres</p>
          <p>{getGenres(genres)}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
