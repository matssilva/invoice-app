import styled from "styled-components";

export const SidebarContainer = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.color2};
    width: 103px;
    border-radius: 0px 20px 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > .pacman {
        width: 100%;
        background-image: linear-gradient(to bottom, #7C5DFA 50%, #9277FF 50%);
        height: 103px;
        border-radius: 0px 20px 20px 0px;
        margin-bottom: auto;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid #494E6E;
    width: 100%;
    justify-content: center;
    padding: 24px 32px;
    margin-top: 28px;
    
    & img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
`;