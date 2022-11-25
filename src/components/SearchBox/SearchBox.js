export const SearchBox = ({ handleSubmit, value, setQueryMovie }) => {
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
