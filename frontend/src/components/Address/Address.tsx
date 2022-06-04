import React from 'react';
import { LabelSmall } from '../../shared/styles';
import { Address } from '../../types';
import Container from './style';

interface Props {
  address: Address | undefined;
  alignItem?: string;
}

const AddressComponent: React.FC<Props> = ({ address, alignItem }) => (
  <Container alignItem={alignItem}>
    <LabelSmall>{address?.street}</LabelSmall>
    <LabelSmall>{address?.city}</LabelSmall>
    <LabelSmall>{address?.postCode}</LabelSmall>
    <LabelSmall>{address?.country}</LabelSmall>
  </Container>
);

export default AddressComponent;

AddressComponent.defaultProps = {
  alignItem: 'normal',
};
