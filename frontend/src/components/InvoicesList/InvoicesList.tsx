import React from 'react';
import { Invoice } from '../../types';
import {
  ClientName,
  Date,
  Identifier,
  Item,
  List,
  StatusContainer,
  Total,
} from './style';
import IconArrowRight from '../../assets/icon-arrow-right.svg?component';

interface Props {
  invoices: Array<Invoice>;
}

const InvoicesList = ({ invoices }: Props): JSX.Element => (
  <List>
    {invoices.map((invoice) => (
      <Item key={invoice.id}>
        <Identifier>
          <span>#</span>
          {invoice.id}
        </Identifier>
        <Date>Due 19 Aug 2021</Date>
        <ClientName>{invoice.clientName}</ClientName>
        <Total>R${invoice.total}</Total>
        <StatusContainer status={invoice.status}>
          <div className="circle" />
          <div className="statusText">{invoice.status}</div>
        </StatusContainer>
        <IconArrowRight />
      </Item>
    ))}
  </List>
);

export default InvoicesList;
