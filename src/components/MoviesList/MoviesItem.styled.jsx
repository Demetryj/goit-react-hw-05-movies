import styled from 'styled-components';

export const Poster = styled.div`
  height: 300px;

  img {
    height: 100%;
  }
`;

export const MovieName = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.body};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.movieNameColor};
`;
