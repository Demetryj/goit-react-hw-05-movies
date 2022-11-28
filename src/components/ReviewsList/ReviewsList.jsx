import PropTypes from 'prop-types';

const ReviewsList = ({ ReviewsInfo }) => {
  return (
    <ul>
      {ReviewsInfo.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>{`Author: ${author}`}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  ReviewsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReviewsList;
