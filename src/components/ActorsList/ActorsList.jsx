import image from 'images/no-image-icon.jpg';

export const ActorsList = ({ actorsInfo }) => {
  return (
    <ul>
      {actorsInfo.map(({ id, name, character, profile_path }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : image
              }
              alt={name}
              width="100"
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};
