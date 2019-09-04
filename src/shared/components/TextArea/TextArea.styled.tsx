import { styled } from '../../../styles/styled';

export const LongText = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 10px 17px 10px 20px;
  font-family: ${props => props.theme.fontFamily.body};
  font-size: ${props => props.theme.fontSize.body};
  color: ${props => props.theme.colors.primaryBody};
  resize: none;
  display: flex;
  overflow-y: scroll;
`;
