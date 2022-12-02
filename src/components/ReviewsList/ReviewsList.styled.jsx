import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[3]}px;

  border-radius: ${props => props.theme.radii.normal};
  box-shadow: ${props => props.theme.shadows.second};

  list-style: none;
`;

export const Author = styled.p`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.m};
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const Content = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.s};
  color: ${props => props.theme.colors.primaryText};

  text-indent: ${props => props.theme.space[5]}px;
  text-align: justify;
`;
