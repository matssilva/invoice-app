import React from "react";
import { ImageContainer, SidebarContainer } from "./styles";
import SunIcon from '../../assets/icon-sun.svg?component';
import AvatarImage from '../../assets/image-avatar.jpg';

const Sidebar = () : JSX.Element => {
    return (
        <SidebarContainer>
            <div className="pacman"></div>
            <SunIcon />
            <ImageContainer>
                <img src={AvatarImage} alt="image" />
            </ImageContainer>
        </SidebarContainer>
    )
};

export default Sidebar;