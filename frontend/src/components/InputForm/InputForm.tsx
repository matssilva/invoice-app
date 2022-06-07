import React from 'react';
import { Input, InputGroup, Label } from './style';

interface Props {
  id: string;
  label: string;
}

const InputForm: React.FC<Props> = ({ id, label }) => (
  <InputGroup>
    <Label htmlFor={id}>{label}</Label>
    <Input type="text" id={id} />
  </InputGroup>
);

export default InputForm;
