import styled from '@emotion/styled';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .menu-link {
    font-family: ${props => props.theme.fontFamily.body};
    font-size: ${props => props.theme.fontSize.body};
    color: ${props => props.theme.colors.primaryBody};
    text-decoration: none;
    margin-right: 80px;
    :hover {
      color: ${props => props.theme.colors.secondarySelection};
    }
  }
  .menu-link--active {
    color: ${props => props.theme.colors.secondarySelection};
    border-bottom: 1px solid ${props => props.theme.colors.secondarySelection};
  }
`;

export default StyledMenu;
