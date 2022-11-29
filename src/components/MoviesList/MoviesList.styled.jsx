import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: ${props => props.theme.space[4]}px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 96px) / 7);

  padding: ${props => props.theme.space[2]}px;

  list-style: none;

  transform: scale(1);
  transition: box-shadow 250ms, transform 250ms;

  :hover,
  :focus {
    box-shadow: ${props => props.theme.shadows.first};
    transform: scale(1.1);
  }
`;
