import styled from 'styled-components';

export const Poster = styled.div`
  width: 100%;
  height: 80%;
  margin-bottom: ${props => props.theme.space[3]}px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MovieName = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.body};
  font-size: ${props => props.theme.fontSizes.s};
  color: ${props => props.theme.colors.movieNameColor};
`;
