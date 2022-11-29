import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: ${props => props.theme.space[4]}px;

  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.xl};

  color: ${props => props.theme.colors.primaryText};

  text-align: center;
`;
