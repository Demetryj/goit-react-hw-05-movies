import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * ${props => props.theme.space[5]}px);
  margin-left: calc(-1 * ${props => props.theme.space[5]}px);
`;

export const Item = styled.li`
  margin-top: ${props => props.theme.space[5]}px;
  margin-left: ${props => props.theme.space[5]}px;
  flex-basis: calc(100% / 5 - ${props => props.theme.space[5]}px);

  list-style: none;
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: ${props => props.theme.shadows.first};

  transform: scale(1);
  transition: box-shadow 250ms, transform 250ms;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const LinkItem = styled(Link)`
  display: block;
  height: 100%;

  text-decoration: none;
`;
