import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Input, InputGroup, Label } from './style';

interface Props {
  id: string;
  label: string;
  registerProps: UseFormRegisterReturn;
  error: string | undefined;
}

const InputForm: React.FC<Props> = ({ id, label, registerProps, error }) => (
  <InputGroup hasError={Boolean(error)}>
    <div>
      <Label htmlFor={id}>{label}</Label>
      {error && <span>{error}</span>}
    </div>
    <Input type="text" {...registerProps} />
  </InputGroup>
);

export default InputForm;
