import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import ActorsList from 'components/ActorsList';
import { fetchMovies } from 'services/fetchMovies';
import { Container } from 'components/Container';
import { NoInfo } from 'components/NoInfo/';

const Cast = () => {
  const [actors, setActors] = useState([]);
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
    <section>
      <Container>
        {actors.length > 0 && <ActorsList actorsInfo={actors} />}

        {!loaded && actors.length === 0 && (
          <NoInfo>We don`t have any reviews for this movie.</NoInfo>
        )}

        {error && <NoInfo>Something wrong. Try again later.</NoInfo>}

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
      </Container>
    </section>
  );
};

export default Cast;
