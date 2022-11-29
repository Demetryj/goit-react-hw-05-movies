import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.space[4]}px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 112px) / 7);

  list-style: none;

  img {
    margin-bottom: ${props => props.theme.space[2]}px;

    width: 100%;
    height: 80%;
  }
`;

export const ActorName = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.m};
  margin-bottom: ${props => props.theme.space[2]}px; ;
`;

export const Character = styled.p`
  font-size: ${props => props.theme.fontSizes.s};
  color: ${props => props.theme.colors.primaryText};
`;
