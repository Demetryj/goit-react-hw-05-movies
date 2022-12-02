import styled from 'styled-components';

export const List = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * ${props => props.theme.space[4]}px);
  margin-left: calc(-1 * ${props => props.theme.space[4]}px);
  padding-top: ${props => props.theme.space[4]}px;
`;

export const Item = styled.li`
  margin-top: ${props => props.theme.space[4]}px;
  margin-left: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[2]}px;
  padding-bottom: ${props => props.theme.space[2]}px;
  flex-basis: calc(100% / 7 - ${props => props.theme.space[4]}px);

  list-style: none;

  border-top: 2px solid ${props => props.theme.colors.borderColor};
  border-bottom: 2px solid ${props => props.theme.colors.borderColor};

  img {
    width: 100%;
    height: 100%;
  }
`;

export const WrapperImg = styled.div`
  width: 100%;
  height: 210px;

  margin-bottom: ${props => props.theme.space[2]}px;
`;

export const ActorName = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.s};
  margin-bottom: ${props => props.theme.space[2]}px; ;
`;

export const Character = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.primaryText};
`;
