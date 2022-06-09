import styled from 'styled-components';

export const Label = styled.label`
  font-family: 'Spartan';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.color2};

  border-radius: 4px;
  padding: 14px 24px 13px 17px;
  font-family: 'Spartan';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: #ffffff;
  outline: none;
  width: 100%;
`;

export const InputGroup = styled.div<{ hasError: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${Label} {
    color: ${({ hasError, theme }) => (hasError ? '#EC5757' : theme.color9)};
  }

  ${Input} {
    border: 1px solid ${({ hasError }) => (hasError ? '#EC5757' : '#252945')};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    span {
      font-family: 'Spartan';
      font-style: normal;
      font-weight: 600;
      font-size: 10px;
      line-height: 15px;
      letter-spacing: -0.208333px;
      color: #ec5757;
    }
  }
`;
