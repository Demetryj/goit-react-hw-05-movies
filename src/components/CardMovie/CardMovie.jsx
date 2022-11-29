import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import image from 'images/no-image-icon.jpg';
import { Container } from 'components/Container';

import { getDateYear } from 'services/getDateYear';
import { getScore } from 'services/getScore';
import {
  Wrapper,
  GoBackLink,
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
      <section>
        <Container>
          <GoBackLink to={location.state?.from ?? '/'}>
            {/* <NavLink to={location.state?.from ?? "/"}>  вказувати альтернативний варіант шляху*/}
            <HiArrowNarrowLeft />
            <p>Go back</p>
          </GoBackLink>
          <Wrapper>
            <ImageMovie
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : image
              }
              alt={title}
              width="250"
            />

            <Info>
              <MovieName>
                {release_date
                  ? `${title} (${getDateYear(release_date)})`
                  : title}
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
                    <NavLinkItem to="cast">Cast,</NavLinkItem>
                  </li>
                  <li>
                    <NavLinkItem to="reviews">Reviews</NavLinkItem>
                  </li>
                </AdditionalInfoList>
              </Wrapper>
            </Info>
          </Wrapper>
        </Container>
      </section>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

CardMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array.isRequired,
  }).isRequired,
  getGenres: PropTypes.func.isRequired,
};

export default CardMovie;
