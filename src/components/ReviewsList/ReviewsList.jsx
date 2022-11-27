export const ReviewsList = ({ ReviewsInfo }) => {
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
