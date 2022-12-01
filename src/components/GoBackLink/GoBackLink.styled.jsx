import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[3]}px;

  margin-bottom: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[3]}px;
  padding-left: ${props => props.theme.space[0]}px;

  font-family: ${props => props.theme.fonts.body};

  color: ${props => props.theme.colors.goBackLinkColor};

  transition: color 250ms;

  :hover,
  :focus {
    color: ${props => props.theme.colors.accentgoBackLink};
  }

  text-decoration: none;
`;
