import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Container,
  IdentifierLarge,
  LabelMedium,
  StatusContainer,
  ButtonsContainer,
} from '../../shared/styles';
import { ActionsContainer, Details, GridDetails, Header } from './styles';
import IconArrowLeft from '../../assets/icon-arrow-left.svg?component';
import { useAppDispatch, useAppSelector } from '../../storeHooks';
import { deleteInvoiceAsync, getInvoices } from '../../slices/invoices';
import AddressComponent from '../../components/Address/Address';
import ValueView from '../../components/ValueView/ValueView';
import InvoiceItemsTable from '../../components/InvoiceItemsTable/InvoiceItemsTable';
import { formatDate } from '../../shared/utils';
import DeleteDialog from '../../components/Dialog/Dialog';

const InvoiceDetails: React.FC = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();
  const { invoiceId } = useParams();
  const dispatch = useAppDispatch();

  const invoices = useAppSelector(getInvoices);

  const invoice = invoices.data.find((item) => item.id === invoiceId);

  const onDelete = () => {
    if (!invoiceId) return;
    dispatch(deleteInvoiceAsync(invoiceId));
    navigate('/');
  };

  return (
    <Container>
      <Link to="/">
        <Header>
          <IconArrowLeft />
          <span>Go back</span>
        </Header>
      </Link>

      <ActionsContainer>
        <span>Status</span>
        <StatusContainer status={invoice?.status}>
          <div className="circle" />
          <div className="statusText">{invoice?.status}</div>
        </StatusContainer>
        <ButtonsContainer>
          <Link to="/create" state={{ backgroundLocation: location }}>
            <Button className="normal">Edit</Button>
          </Link>
          <Button className="delete" onClick={() => setIsDeleting(true)}>
            Delete
          </Button>
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
            <ValueView
              label="Invoice Date"
              value={formatDate(invoice?.createdAt)}
            />
          </div>
          <div>
            <ValueView label="Bill To" value={invoice?.clientName} />
          </div>
          <div>
            <ValueView label="Sent to" value={invoice?.clientEmail} />
          </div>
          <div>
            <ValueView
              label="Payment Due"
              value={formatDate(invoice?.paymentDue)}
            />
          </div>
          <div>
            <AddressComponent
              address={invoice?.clientAddress}
              alignItem="flex-start"
            />
          </div>
        </GridDetails>
        <InvoiceItemsTable
          items={invoice?.items || []}
          total={invoice?.total || 0}
        />
      </Details>
      <DeleteDialog
        showDialog={isDeleting}
        identifier={invoice?.id}
        cancelCallback={() => setIsDeleting(false)}
        deleteCallback={() => onDelete(invoice?.id)}
      />
    </Container>
  );
};

export default InvoiceDetails;
