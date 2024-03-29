import { styled } from '../../../styles/styled';

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  font-family: ${props => props.theme.fontFamily.body};
  font-size: ${props => props.theme.fontSize.body};
  color: ${props => props.theme.colors.primaryBody};
  width: fill-available;
  padding: 3px 20px 5px 20px;
  background-color: ${props => props.theme.colors.primaryBackground};
  font-weight: lighter;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${props => props.theme.colors.primaryBody};
`;
