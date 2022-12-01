import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import image from 'images/no-image-icon.jpg';
import { Container } from 'components/Container';

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
  return (
    <>
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
                <NavLinkItem to="cast">Cast,</NavLinkItem>
              </li>
              <li>
                <NavLinkItem to="reviews">Reviews</NavLinkItem>
              </li>
            </AdditionalInfoList>
          </Wrapper>
        </Info>
      </Wrapper>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
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
