import PropTypes from 'prop-types';

const SearchBox = ({ handleSubmit, value, setQueryMovie }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="query"
          value={value}
          onChange={event => setQueryMovie(event.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

SearchBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setQueryMovie: PropTypes.func.isRequired,
};

export default SearchBox;
