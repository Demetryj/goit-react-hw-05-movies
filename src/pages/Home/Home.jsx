import TrendingTodayMovies from 'components/TrendingTodayMovies';
import { Container } from 'components/Container';
import { Title } from 'pages/Home';

const Home = () => {
  return (
    <main>
      <section>
        <Container>
          <Title>Trending today</Title>
          <TrendingTodayMovies />
        </Container>
      </section>
    </main>
  );
};

export default Home;
