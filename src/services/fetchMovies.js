import axios from 'axios';

export const fetchMovies = async url => {
  const response = await axios.get(url);

  const { results } = response.data;

  return results;
};
