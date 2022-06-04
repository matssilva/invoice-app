import styled from 'styled-components';

const defineStatusColor = (status: string, opacity: string) => {
  if (status === 'pending') return `rgba(255, 143, 0, ${opacity})`;
  if (status === 'paid') return `rgba(51, 214, 159, ${opacity})`;
  return `rgba(223, 227, 250, ${opacity})`;
};

export const Container = styled.div`
  width: min(100% - 2rem, 730px);
  color: ${({ theme }) => theme.color6};
  font-family: 'Spartan Medium';
  padding-top: 72px;
`;

export const StatusContainer = styled.div<{ status: string }>`
  border-radius: 6px;
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

export const Button = styled.button`
  padding: 17px 24px;
  font-family: 'Spartan';
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  border-radius: 24px;
  border: none;
  color: #fff;

  &.edit {
    background-color: ${({ theme }) => theme.color7};
    color: #dfe3fa;

    :hover {
      background-color: #ffffff;
      color: #7e88c3;
    }
  }

  &.delete {
    background-color: #ec5757;
    :hover {
      background-color: #ff9797;
    }
  }

  &.asPaid {
    background-color: #7c5dfa;
    :hover {
      background-color: #9277ff;
    }
  }

  :hover {
    cursor: pointer;
  }
`;
