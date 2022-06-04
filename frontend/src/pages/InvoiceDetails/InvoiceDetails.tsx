import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, StatusContainer } from '../../shared/styles';
import { ActionsContainer, ButtonsContainer, Header } from './styles';
import IconArrowLeft from '../../assets/icon-arrow-left.svg?component';
import { useAppSelector } from '../../storeHooks';
import { getInvoices } from '../../slices/invoices';

const InvoiceDetails: React.FC = () => {
  const { invoiceId } = useParams();
  const invoices = useAppSelector(getInvoices);

  const invoice = invoices.data.find((item) => item.id === invoiceId);

  return (
    <Container>
      <Header>
        <IconArrowLeft />
        <span>Go back</span>
      </Header>
      <ActionsContainer>
        <span>Status</span>
        <StatusContainer status={invoice?.status}>
          <div className="circle" />
          <div className="statusText">{invoice?.status}</div>
        </StatusContainer>
        <ButtonsContainer>
          <Button className="edit">Edit</Button>
          <Button className="delete">Delete</Button>
          <Button className="asPaid">Mark as Paid</Button>
        </ButtonsContainer>
      </ActionsContainer>
    </Container>
  );
};

export default InvoiceDetails;
