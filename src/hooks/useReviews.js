import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'services/fetchMovies';

export const useReviews = () => {
  const [reviews, setReviews] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        if (isFirstRender.current) {
          isFirstRender.current = false;
          return;
        }

        setLoaded(true);

        const dataReviewsMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=084c550b6f1767443109bcf4bcaee21b&language=en-US`
        );

        const dataReviews = dataReviewsMovie.results;

        setReviews([...dataReviews]);
      } catch (error) {
        console.log(error.message);
        setError(error);
      } finally {
        setLoaded(false);
      }
    };

    fetch();
  }, [movieId]);

  return { reviews, loaded, error };
};
