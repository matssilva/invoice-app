import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 65px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  background-color: ${({ theme }) => theme.color2};
  padding: 16px 24px 16px 32px;

  :hover {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.color8};
    padding: 15px 23px 15px 31px;
  }
`;

const Text = styled.div`
  font-family: 'Spartan';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
`;

export const Identifier = styled.div`
  font-family: 'Spartan Bold';
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.color6};

  span {
    color: #7e88c3;
  }
`;

export const Date = styled(Text)`
  color: ${({ theme }) => theme.color9};
`;

export const ClientName = styled(Text)`
  color: ${({ theme }) => theme.color6};
`;

export const Total = styled.div`
  font-family: 'Spartan Bold';
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: ${({ theme }) => theme.color6};
`;

export const StatusContainer = styled.div<{ status: string }>`
  border-radius: 6px;
  //padding: 13px 29px 12px 30px;
  mix-blend-mode: normal;
  background: ${({ status }) => defineStatusColor(status, '0.06')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 104px;
  height: 40px;

  .circle {
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: ${({ status }) => defineStatusColor(status, '1')};
  }

  .statusText {
    font-family: 'Spartan';
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${({ status }) => defineStatusColor(status, '1')};
    text-transform: capitalize;
  }
`;
