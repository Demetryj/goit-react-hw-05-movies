import { NavLink, Outlet } from 'react-router-dom';
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
  defaultSrc = image,
}) => {
  return (
    <>
      <div>
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : defaultSrc
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
