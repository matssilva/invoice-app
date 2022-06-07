import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-family: 'Spartan';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.color9};
  margin-bottom: 10px;
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.color2};
  border: 1px solid #252945;
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
