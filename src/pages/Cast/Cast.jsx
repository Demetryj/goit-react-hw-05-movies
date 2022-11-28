import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import ActorsList from 'components/ActorsList';
import { fetchMovies } from 'services/fetchMovies';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoaded(true);

        const dataActorsMovie = await fetchMovies(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=084c550b6f1767443109bcf4bcaee21b&language=en-US`
        );

        const dataCast = dataActorsMovie.cast;

        setActors([...dataCast]);
      } catch (error) {
        console.log(error.message);
        setError(error);
      } finally {
        setLoaded(false);
      }
    };

    fetch();
  }, [movieId]);

  return (
    <div>
      {actors.length > 1 ? (
        <ActorsList actorsInfo={actors} />
      ) : (
        <p>We don`t have information abaut actors for this movie.</p>
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

export default Cast;
