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

export const Details = styled.div`
  margin-top: 24px;
  background: #1e2139;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color2};
  padding: 48px;

  .header {
    display: flex;
    justify-content: space-between;

    .description-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
`;

export const GridDetails = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 8px;
  margin-top: 21px;
  div:nth-child(4) {
    display: flex;
    align-items: flex-end;
  }
`;
