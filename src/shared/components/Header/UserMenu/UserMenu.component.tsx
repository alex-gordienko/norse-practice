import React from 'react';
import DefaultPhoto from '../../../../assets/img/DefaultPhoto.jpg';
import StyledUserMenu from './UserMenu.styled';

const UserMenu = () => {
  return (
    <StyledUserMenu>
      <a className="user-menu__link" href="User.html">
        <img
          className="user-menu__avatar"
          src={DefaultPhoto}
          alt="user-photo"
        />
      </a>
      <div className="user-menu__wrapper">
        <div className="user-menu__name">Bill</div>
        <div className="user-menu__role">Admin</div>
      </div>
    </StyledUserMenu>
  );
};

export default UserMenu;
