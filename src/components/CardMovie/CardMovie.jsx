import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import image from 'images/no-image-icon.jpg';
import { GoBackLink } from 'components/GoBackLink';
import { getDateYear } from 'services/getDateYear';
import { getScore } from 'services/getScore';
import {
  Wrapper,
  WrapperImage,
  ImageMovie,
  Info,
  MovieName,
  Text,
  Overview,
  Genres,
  AdditionalInfo,
  AdditionalInfoList,
  NavLinkItem,
} from './CardMovie.styled';

const CardMovie = ({
  movie: {
    title,
    poster_path,
    release_date = null,
    vote_average = null,
    overview,
    genres,
  },
  getGenres,
}) => {
  const location = useLocation();

  return (
    <>
      <GoBackLink to={location.state?.from ?? '/'}>
        {/* <NavLink to={location.state?.from ?? "/"}>  вказувати альтернативний варіант шляху*/}
        <HiArrowNarrowLeft />
        <p>Go back</p>
      </GoBackLink>

      <Wrapper>
        <WrapperImage>
          <ImageMovie
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : image
            }
            alt={title}
          />
        </WrapperImage>

        <Info>
          <MovieName>
            {release_date ? `${title} (${getDateYear(release_date)})` : title}
          </MovieName>
          <Text>
            {vote_average
              ? `User Score: ${getScore(vote_average)}% `
              : 'User Score: no score'}
          </Text>
          <Overview>Overview</Overview>
          <Text>{overview ? overview : 'No overview'}</Text>
          <Genres>Genres</Genres>
          <Text>{getGenres(genres)}</Text>

          <Wrapper>
            <AdditionalInfo>Additional information:</AdditionalInfo>
            <AdditionalInfoList>
              <li>
                {/* Передаємо пропсом state (властивість об'єкта місцезнаходження location), 
                  об'єкт з властивістю from, значення якого - це значення властивості from із об'єкта location,
                   яки було бпередано у цей маршрут ('/movies/:movieId') за посиланням з маршруту '/movies', 
                   щоб при натисканні на посилання Go back повернутися із маршрута ('/movies/:movieId/cast')
                   або ('/movies/:movieId/reviews) на маршрут '/movies'*/}
                <NavLinkItem to="cast" state={{ from: location.state?.from }}>
                  Cast
                </NavLinkItem>
              </li>
              <li>
                <NavLinkItem
                  to="reviews"
                  state={{ from: location.state?.from }}
                >
                  Reviews
                </NavLinkItem>
              </li>
            </AdditionalInfoList>
          </Wrapper>
        </Info>
      </Wrapper>
    </>
  );
};

CardMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array.isRequired,
  }).isRequired,
  getGenres: PropTypes.func.isRequired,
};

export default CardMovie;
