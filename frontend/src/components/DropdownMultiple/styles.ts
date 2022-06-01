import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  :hover {
    cursor: pointer;
  }

  > div {
    font-family: "Spartan Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.color6};
    margin-right: 16px;
  }

  .rotate {
    transform: rotate(180deg);
  }
`;
