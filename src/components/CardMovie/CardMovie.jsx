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
  defaultSrc = 'https://www.freeiconspng.com/uploads/no-image-icon-23.jpg',
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
          width="250"
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
