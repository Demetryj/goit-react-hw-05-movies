import styled from 'styled-components';

export const NoInfo = styled.p`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.heading};
  font-size: ${props => props.theme.fontSizes.l};

  text-align: center;
`;
