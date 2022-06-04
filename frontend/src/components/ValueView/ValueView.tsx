import React from 'react';
import { LabelLarge, LabelMedium } from '../../shared/styles';
import Container from './style';

interface Props {
  label: string;
  value: string;
}
const ValueView: React.FC<Props> = ({ label, value }) => (
  <Container>
    <LabelMedium>{label}</LabelMedium>
    <LabelLarge>{value}</LabelLarge>
  </Container>
);

export default ValueView;
