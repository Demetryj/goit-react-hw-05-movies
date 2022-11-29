import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space[3]}px;

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

export const Wrapper = styled.div`
  display: flex;
  gap: ${props => props.theme.space[4]}px;
`;

export const ImageMovie = styled.img`
  width: 250px;
  height: 350px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[4]}px;
`;

export const MovieName = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.l};
`;

export const Overview = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.m};
`;

export const Text = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  color: ${props => props.theme.colors.primaryText};
`;

export const Genres = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.m};
`;

export const AdditionalInfo = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.m};
`;

export const AdditionalInfoList = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavLinkItem = styled(NavLink)`
  position: relative;
  padding: ${props => props.theme.space[3]}px;

  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.m};
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
