export const getGenresForDetailsMovie = genresMovie => {
  const nameGenres = genresMovie.map(genre => genre.name);

  if (nameGenres.length === 0) {
    return 'Other';
  }

  if (nameGenres.length > 3) {
    return `${nameGenres[0]}, ${nameGenres[1]}, 'Others'`;
  }

  return nameGenres.join(', ');
};
