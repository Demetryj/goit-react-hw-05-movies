import PropTypes from 'prop-types';
import image from 'images/no-image-icon.jpg';

const ActorsList = ({ actorsInfo }) => {
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

ActorsList.propTypes = {
  actorsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};

export default ActorsList;
