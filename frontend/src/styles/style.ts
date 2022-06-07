import styled from 'styled-components';

export const Main = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.color1};
  display: flex;
`;

export const ContainerPages = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;
