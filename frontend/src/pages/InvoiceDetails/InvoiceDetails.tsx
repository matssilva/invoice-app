import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  Container,
  IdentifierLarge,
  LabelMedium,
  StatusContainer,
} from '../../shared/styles';
import {
  ActionsContainer,
  ButtonsContainer,
  Details,
  GridDetails,
  Header,
} from './styles';
import IconArrowLeft from '../../assets/icon-arrow-left.svg?component';
import { useAppSelector } from '../../storeHooks';
import { getInvoices } from '../../slices/invoices';
import AddressComponent from '../../components/Address/Address';
import ValueView from '../../components/ValueView/ValueView';

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
      <Details>
        <div className="header">
          <div className="description-container">
            <IdentifierLarge>
              <span>#</span>
              {invoice?.id}
            </IdentifierLarge>
            <LabelMedium>{invoice?.description}</LabelMedium>
          </div>
          <AddressComponent address={invoice?.senderAddress} />
        </div>
        <GridDetails>
          <div>
            <ValueView label="Invoice Date" value="21 Aug 2021" />
          </div>
          <div>
            <ValueView label="Bill To" value={invoice?.clientName} />
          </div>
          <div>
            <ValueView label="Sent to" value={invoice?.clientEmail} />
          </div>
          <div>
            <ValueView label="Payment Due" value="21 Aug 2021" />
          </div>
          <div>
            <AddressComponent
              address={invoice?.clientAddress}
              alignItem="flex-start"
            />
          </div>
        </GridDetails>
      </Details>
    </Container>
  );
};

export default InvoiceDetails;
