import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  :hover {
    cursor: pointer;
  }
  width: 192px;
  gap: 16px;

  > .title {
    font-family: "Spartan Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.color6};
  }

  .rotate {
    transform: rotate(180deg);
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  background-color: ${({ theme }) => theme.color7};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 24px;
`;

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
`;
