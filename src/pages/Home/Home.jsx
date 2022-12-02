import TrendingTodayMovies from 'components/TrendingTodayMovies';
import { Container } from 'components/Container';

const Home = () => {
  return (
    <main>
      <section>
        <Container>
          <TrendingTodayMovies />
        </Container>
      </section>
    </main>
  );
};

export default Home;
