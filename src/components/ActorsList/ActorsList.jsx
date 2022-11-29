import PropTypes from 'prop-types';
import image from 'images/no-image-icon.jpg';
import { List, Item, ActorName, Character } from 'components/ActorsList';

const ActorsList = ({ actorsInfo }) => {
  return (
    <List>
      {actorsInfo.map(({ id, name, character, profile_path }) => {
        return (
          <Item key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : image
              }
              alt={name}
              width="150"
            />
            <ActorName>{name}</ActorName>
            <Character>{character}</Character>
          </Item>
        );
      })}
    </List>
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
