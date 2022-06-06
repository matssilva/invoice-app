import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 32px;
  background-color: ${({ theme }) => theme.color7};
  border-radius: 8px 8px 0px 0px;
  margin-top: 45px;
  th,
  td {
    text-align: right;
  }
  th:nth-child(1),
  td:nth-child(1) {
    text-align: initial;
  }
  th:nth-child(2),
  td:nth-child(2) {
    text-align: center;
  }
`;

export const TableFooter = styled.div`
  padding: 32px;
  background-color: ${({ theme }) => theme.color10};
  border-radius: 0px 0px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
