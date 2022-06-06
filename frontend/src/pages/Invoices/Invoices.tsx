import React, { useEffect, useState } from 'react';
import DropdownMultiple, {
  Option,
} from '../../components/DropdownMultiple/DropdownMultiple';
import { Header, TitleContainer, Button } from './styles';
import IconPlus from '../../assets/icon-plus.svg?component';
import { useAppDispatch, useAppSelector } from '../../storeHooks';
import { getInvoices, getInvoicesAsync } from '../../slices/invoices';
import InvoicesList from '../../components/InvoicesList/InvoicesList';
import { Container } from '../../shared/styles';

const options: Array<Option> = [
  { value: 'Draft', text: 'Draft' },
  { value: 'Pending', text: 'Pending' },
  { value: 'Paid', text: 'Paid' },
];

const Invoices = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const invoices = useAppSelector(getInvoices);

  const [filterStatus, setFilterStatus] = useState<String>('');

  useEffect(() => {
    if (invoices.status !== 'succeeded') dispatch(getInvoicesAsync());
  }, []);

  const filtered = invoices.data.filter(
    (invoice) => invoice.status === filterStatus.toLowerCase() || !filterStatus
  );

  return (
    <Container>
      <Header>
        <TitleContainer>
          <h1>Invoices</h1>
          <sub>There are {filtered.length} total invoices</sub>
        </TitleContainer>
        <DropdownMultiple
          options={options}
          selected={filterStatus}
          setSelected={setFilterStatus}
        />
        <Button type="button">
          <div>
            <IconPlus />
          </div>
          New Invoice
        </Button>
      </Header>
      <InvoicesList invoices={filtered} />
    </Container>
  );
};

export default Invoices;
