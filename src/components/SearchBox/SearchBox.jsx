import PropTypes from 'prop-types';
import { Form, Input, BtnSearch } from './SearchBox.styled';

const SearchBox = ({ handleSubmit, value, setQueryMovie }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Input
          autoComplete="off"
          // autoFocus
          placeholder="Search movie"
          name="query"
          value={value}
          onChange={event => setQueryMovie(event.target.value)}
        />
      </label>
      <BtnSearch type="submit">Search</BtnSearch>
    </Form>
  );
};

SearchBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setQueryMovie: PropTypes.func.isRequired,
};

export default SearchBox;
