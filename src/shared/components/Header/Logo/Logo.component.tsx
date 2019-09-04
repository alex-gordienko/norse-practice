import React from 'react';
import StyledLogo from './Logo.styled';
import { ReactComponent as LogoIcon } from '../../../../assets/img/logo.svg';

const Logo = () => (
  <StyledLogo href="/">
    <LogoIcon />
  </StyledLogo>
);

export default Logo;
