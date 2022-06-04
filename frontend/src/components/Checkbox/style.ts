import styled from 'styled-components';

export const CheckboxContainer = styled.span<{ isChecked: Boolean }>`
  display: inline-block;
  height: 16px;
  width: 16px;
  background: ${({ theme, isChecked }) =>
    isChecked ? theme.color8 : theme.color2};
  margin-right: 13px;
  border-radius: 2px;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color6};
  display: flex;
  align-items: center;

  .labelText {
    font-family: 'Spartan';
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
  }

  :hover {
    cursor: pointer;
    ${CheckboxContainer} {
      border: 1px solid ${({ theme }) => theme.color8};
    }
  }
`;

export const Input = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
