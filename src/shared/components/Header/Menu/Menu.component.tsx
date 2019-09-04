import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledMenu from './Menu.styled';

const Menu = () => (
  <StyledMenu>
    <NavLink
      exact={true}
      to="/"
      className="menu-link"
      activeClassName="menu-link--active"
    >
      Home
    </NavLink>
    <NavLink
      to="/news"
      className="menu-link"
      activeClassName="menu-link--active"
    >
      News
    </NavLink>
    <NavLink
      to="/about-us"
      className="menu-link"
      activeClassName="menu-link--active"
    >
      About Us
    </NavLink>
  </StyledMenu>
);

export default Menu;
