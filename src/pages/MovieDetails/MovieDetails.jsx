import { NavLink, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  return (
    <main>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to=":movieId">Cast</NavLink>
            </li>
            <li>
              <NavLink to=":movieId">Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </main>
  );
};
