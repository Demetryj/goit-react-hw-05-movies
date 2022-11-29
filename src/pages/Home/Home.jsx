import TrendingTodayMovies from 'components/TrendingTodayMovies';
import { Container } from 'components/Container';
import { Title } from 'pages/Home';

const Home = () => {
  return (
    <main>
      <Container>
        <Title>Trending today</Title>
        <TrendingTodayMovies />
      </Container>
    </main>
  );
};

export default Home;
