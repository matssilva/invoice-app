import styled from 'styled-components';

const Container = styled.div<{ alignItem?: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItem }) => alignItem};
`;

export default Container;
