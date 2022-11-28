import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import ReviewsList from 'components/ReviewsList';
import { fetchMovies } from 'services/fetchMovies';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
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

  console.log(reviews);
  return (
    <div>
      {reviews.length > 1 ? (
        <ReviewsList ReviewsInfo={reviews} />
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}

      {error && <p>Something wrong. Try again later.</p>}

      {loaded && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="blue"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: 'center' }}
          visible={true}
        />
      )}
    </div>
  );
};

export default Reviews;
