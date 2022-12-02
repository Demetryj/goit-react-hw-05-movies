import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/fetchMovies';

export const useMovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  // const isFirstRender = useRef(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        // if (isFirstRender.current) {
        //   isFirstRender.current = false;
        //   return;
        // }

        setLoaded(true);

        const dataMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=084c550b6f1767443109bcf4bcaee21b&language=en`
        );

        setMovie(dataMovie);
      } catch (error) {
        console.log(error.message);
        setError(error);
      } finally {
        setLoaded(false);
      }
    };

    fetch();
  }, [movieId]);

  return { movie, loaded, error };
};
