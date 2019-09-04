import styled from '@emotion/styled';

interface IStyledSelectProps {
  active: boolean;
}

const StyledSelect = styled.div<IStyledSelectProps>`
  min-width: 130px;
  height: 100%;
  position: relative;

  input {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 1px solid #cfcfcf;
    padding: 2px 35px 2px 20px;
    font-size: 14px;
    appearance: none;
    border-radius: ${props => (props.active ? '25px 25px 0 0' : '25px')};
  }

  span {
    cursor: pointer;
    content: '';
    border-bottom: 1px solid #000;
    border-left: 1px solid #000;
    position: absolute;
    z-index: 1;
    top: ${props => (props.active ? '25px' : '20px')};
    right: 25px;
    height: 8px;
    width: 8px;
    display: inline-block;
    transform: ${props => (props.active ? 'rotate(135deg)' : 'rotate(-45deg)')};
  }

  .select-options {
    width: 100%;
  }
`;

export default StyledSelect;
