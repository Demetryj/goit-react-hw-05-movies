import styled from 'styled-components';

export const Form = styled.form`
  text-align: center;
  margin-bottom: ${props => props.theme.space[5]}px;
`;

export const Input = styled.input`
  margin-right: ${props => props.theme.space[3]}px;
  padding: ${props => props.theme.space[3]}px;

  width: 300px;
  height: 40px;

  border-radius: ${props => props.theme.radii.normal};

  &:not(:placeholder-shown) {
    border-color: ${props => props.theme.colors.accent};
  }
`;

export const BtnSearch = styled.button`
  padding-left: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  height: 40px;
  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.backgroundBtn};

  border: ${props => props.theme.radii.none};
  border-radius: ${props => props.theme.radii.normal};
  cursor: pointer;

  transition: color 250ms, background-color 250ms;

  :hover,
  :focus {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.backgroundAccentBtn};
  }
`;
