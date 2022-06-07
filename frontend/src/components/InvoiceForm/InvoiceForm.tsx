import React from 'react';
import InputForm from '../InputForm/InputForm';
import { Form, SectionTitle } from './style';

// import { Container } from './styles';

const InvoiceForm: React.FC = () => (
  <Form>
    <SectionTitle>Bill From</SectionTitle>
    <InputForm id="streetAddress" label="Street Address" />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '24px',
      }}
    >
      <InputForm id="city" label="City" />
      <InputForm id="postCode" label="Post Code" />
      <InputForm id="country" label="Country" />
    </div>
    <SectionTitle>Bill To</SectionTitle>
    <InputForm id="clientName" label="Client’s Name" />
    <InputForm id="clientEmail" label="Client’s Email" />
    <InputForm id="streetAddress2" label="Street Address" />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '24px',
      }}
    >
      <InputForm id="city" label="City" />
      <InputForm id="postCode" label="Post Code" />
      <InputForm id="country" label="Country" />
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '24px',
      }}
    >
      <InputForm id="issueDate" label="Issue Date" />
      <InputForm id="paymentTerms" label="Payment Terms" />
    </div>
    <InputForm id="projectDescription" label="Project Description" />
  </Form>
);

export default InvoiceForm;
