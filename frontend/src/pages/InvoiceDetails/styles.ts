import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  span {
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: -0.25px;
    color: #888eb0;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 32px;
  background-color: ${({ theme }) => theme.color2};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  margin-top: 32px;

  span {
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: #dfe3fa;
    margin-right: 16px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 8px;
`;
