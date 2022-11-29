import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: inline-flex;
  gap: ${props => props.theme.space[5]}px;
`;

export const NavLinkItem = styled(NavLink)`
  position: relative;
  padding: ${props => props.theme.space[3]}px;

  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.l};
  text-decoration: none;

  color: ${props => props.theme.colors.navLink};
  transition: color 250ms;

  &.active {
    color: ${props => props.theme.colors.accent};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${props => props.theme.colors.accent};
  }

  :hover,
  :focus {
    text-decoration: underline;
  }
`;
