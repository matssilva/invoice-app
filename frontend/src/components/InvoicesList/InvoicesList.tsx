import React from 'react';
import { Link } from 'react-router-dom';
import { Invoice } from '../../types';
import { ClientName, Date, Item, List, Total } from './style';
import IconArrowRight from '../../assets/icon-arrow-right.svg?component';
import { IdentifierSmall, StatusContainer } from '../../shared/styles';

interface Props {
  invoices: Array<Invoice>;
}

const InvoicesList = ({ invoices }: Props): JSX.Element => (
  <List>
    {invoices.map((invoice) => (
      <Link to={`details/${invoice.id}`} style={{ textDecoration: 'none' }}>
        <Item key={invoice.id}>
          <IdentifierSmall>
            <span>#</span>
            {invoice.id}
          </IdentifierSmall>
          <Date>Due 19 Aug 2021</Date>
          <ClientName>{invoice.clientName}</ClientName>
          <Total>R${invoice.total}</Total>
          <StatusContainer status={invoice.status}>
            <div className="circle" />
            <div className="statusText">{invoice.status}</div>
          </StatusContainer>
          <IconArrowRight />
        </Item>
      </Link>
    ))}
  </List>
);

export default InvoicesList;
