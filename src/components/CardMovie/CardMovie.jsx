import { Suspense } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import image from 'images/no-image-icon.jpg';
import { getDateYear } from 'services/getDateYear';
import { getScore } from 'services/getScore';

const CardMovie = ({
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
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

CardMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array.isRequired,
  }).isRequired,
  getGenres: PropTypes.func.isRequired,
};

export default CardMovie;
