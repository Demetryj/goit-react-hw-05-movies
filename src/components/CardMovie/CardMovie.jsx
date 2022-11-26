import image from '../../images/no-image-icon.jpg';

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
          {release_date
            ? `${title} (${new Date(release_date).getFullYear()})`
            : title}
        </p>
        <p>
          {vote_average
            ? `User Score: ${Math.round(vote_average) * 10}% `
            : 'User Score:'}
        </p>
        <p>Overview</p>
        {overview && <p>{overview}</p>}
        <p>Genres</p>
        <p>{getGenres(genres)}</p>
      </div>
    </div>
  );
};
