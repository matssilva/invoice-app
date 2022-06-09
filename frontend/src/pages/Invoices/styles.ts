import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 24px;
  padding: 8px 15px 8px 8px;
  background-color: ${({ theme }) => theme.color5};
  color: ${({ theme }) => theme.color6};
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: 'Spartan Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  margin-left: 40px;
  cursor: pointer;

  div {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color6};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: auto;

  h1 {
    font-family: 'Spartan Bold';
    font-size: 32px;
  }

  sub {
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ theme }) => theme.color3};
  }
`;
