import React from 'react';
import { ImageContainer, SidebarContainer } from './styles';
import SunIcon from '../../assets/icon-sun.svg?component';
import AvatarImage from '../../assets/image-avatar.jpg';

const Sidebar = (): JSX.Element => (
  <SidebarContainer>
    <div className="pacman" />
    <SunIcon />
    <ImageContainer>
      <img src={AvatarImage} alt="" />
    </ImageContainer>
  </SidebarContainer>
);

export default Sidebar;
