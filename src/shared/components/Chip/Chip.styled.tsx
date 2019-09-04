import { styled } from '../../../styles/styled';

interface IStyledChipProps {
  deletable: boolean;
}

const StyledChip = styled.div<IStyledChipProps>`
  display: inline-block;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.chips.background};
  padding: ${props =>
    props.deletable! ? '5px 5px 5px 10px' : '5px 10px 5px 10px'};
  margin: 5px;
  font-family: ${props => props.theme.fontFamily.body};
  font-size: ${props => props.theme.fontSize.body};

  color: ${props => props.theme.colors.chips.text};

  .delete-icon {
    padding: 0;
    margin-left: 10px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export default StyledChip;
