import genres from '../data/genres.json';

export const getGenresMovie = genresMovie => {
  const nameGenres = genres.reduce((acc, genre) => {
    if (genresMovie.includes(genre.id)) {
      acc.push(genre.name);
    }

    return acc;
  }, []);

  if (nameGenres.length === 0) {
    return 'Other';
  }

  if (nameGenres.length > 3) {
    return `${nameGenres[0]}, ${nameGenres[1]}, 'Others'`;
  }

  return nameGenres.join(', ');
};
