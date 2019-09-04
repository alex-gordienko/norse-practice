import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import Menu from './Menu';
import UserMenu from './UserMenu';
import Logo from './Logo';
import Container from '../Container';
import StyledHeader from './Header.styled';
import { ITheme } from '../../../styles/variables';

interface IHeaderProps {
  theme: ITheme;
}

const Header = ({ theme }: IHeaderProps) => (
  <ThemeProvider theme={theme}>
    <Container>
      <StyledHeader>
        <Logo />
        <Menu />
        <UserMenu />
      </StyledHeader>
    </Container>
  </ThemeProvider>
);

export default Header;
