import styled from 'styled-components';

export const Border = styled.span`
  position: absolute;
  display: block;
  height: 8px;
  /* background-color: ${props => props.theme.colors.borderColor}; */
  background-color: red;
  top: 250px;
  left: 50px;
  z-index: 100;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * ${props => props.theme.space[4]}px);
  margin-left: calc(-1 * ${props => props.theme.space[4]}px);
  padding-top: ${props => props.theme.space[4]}px;
`;

export const Item = styled.li`
  margin-top: ${props => props.theme.space[4]}px;
  margin-left: ${props => props.theme.space[4]}px;
  flex-basis: calc(100% / 7 - ${props => props.theme.space[4]}px);

  list-style: none;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const WrapperImg = styled.div`
  width: 100%;
  height: 200px;

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
