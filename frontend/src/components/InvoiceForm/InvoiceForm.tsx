import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonsContainer } from '../../shared/styles';
import { Invoice } from '../../types';
import InputForm from '../InputForm/InputForm';
import { Form, Section, Title } from './style';

const InvoiceForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Invoice>();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Form onSubmit={onSubmit}>
      <Title>Bill From</Title>
      <InputForm
        id="streetAddress"
        label="Street Address"
        registerProps={{
          ...register('senderAddress.street', { required: 'can’t be empty' }),
        }}
        error={errors.senderAddress?.street?.message}
      />
      <Section>
        <InputForm
          id="senderAddress.city"
          label="City"
          registerProps={{
            ...register('senderAddress.city', { required: 'can’t be empty' }),
          }}
          error={errors.senderAddress?.city?.message}
        />
        <InputForm
          id="senderAddress.postCode"
          label="Post Code"
          registerProps={{
            ...register('senderAddress.postCode', {
              required: 'can’t be empty',
            }),
          }}
          error={errors.senderAddress?.postCode?.message}
        />
        <InputForm
          id="senderAddress.country"
          label="Country"
          registerProps={{
            ...register('senderAddress.country', {
              required: 'can’t be empty',
            }),
          }}
          error={errors.senderAddress?.country?.message}
        />
      </Section>
      <Title>Bill To</Title>
      <InputForm
        id="clientName"
        label="Client’s Name"
        registerProps={{
          ...register('clientName', { required: 'can’t be empty' }),
        }}
        error={errors.clientName?.message}
      />
      <InputForm
        id="clientEmail"
        label="Client’s Email"
        registerProps={{
          ...register('clientEmail', { required: 'can’t be empty' }),
        }}
        error={errors.clientEmail?.message}
      />
      <InputForm
        id="clientAddress.street"
        label="Street Address"
        registerProps={{
          ...register('clientAddress.street', { required: 'can’t be empty' }),
        }}
        error={errors.clientAddress?.street?.message}
      />
      <Section>
        <InputForm
          id="clientAddress.city"
          label="City"
          registerProps={{
            ...register('clientAddress.city', { required: 'can’t be empty' }),
          }}
          error={errors.clientAddress?.city?.message}
        />
        <InputForm
          id="clientAddress.postCode"
          label="Post Code"
          registerProps={{
            ...register('clientAddress.postCode', {
              required: 'can’t be empty',
            }),
          }}
          error={errors.clientAddress?.postCode?.message}
        />
        <InputForm
          id="clientAddress.country"
          label="Country"
          registerProps={{
            ...register('clientAddress.country', {
              required: 'can’t be empty',
            }),
          }}
          error={errors.clientAddress?.country?.message}
        />
      </Section>
      <Section>
        <InputForm
          id="issueDate"
          label="Issue Date"
          registerProps={{
            ...register('createdAt', { required: 'can’t be empty' }),
          }}
          error={errors.createdAt?.message}
        />
        <InputForm
          id="paymentTerms"
          label="Payment Terms"
          registerProps={{
            ...register('paymentTerms', { required: 'can’t be empty' }),
          }}
          error={errors.paymentTerms?.message}
        />
      </Section>
      <InputForm
        id="projectDescription"
        label="Project Description"
        registerProps={{
          ...register('description', { required: 'can’t be empty' }),
        }}
        error={errors.description?.message}
      />
      <ButtonsContainer>
        <Button className="normal" type="button" onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button className="submit" type="submit">
          Save Changes
        </Button>
      </ButtonsContainer>
    </Form>
  );
};

export default InvoiceForm;
