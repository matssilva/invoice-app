import React, { useEffect, useState } from 'react';
import DropdownMultiple, {
  Option,
} from '../../components/DropdownMultiple/DropdownMultiple';
import { Header, TitleContainer, Container } from './styles';
import IconPlus from '../../assets/icon-plus.svg?component';
import api from '../../api';
import { useAppDispatch, useAppSelector } from '../../storeHooks';
import { getInvoices, getInvoicesAsync } from '../../slices/invoices';
import InvoicesList from '../../components/InvoicesList/InvoicesList';

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
    dispatch(getInvoicesAsync());
  }, []);

  return (
    <Container>
      <Header>
        <TitleContainer>
          <h1>Invoices</h1>
          <sub>There are 7 total invoices</sub>
        </TitleContainer>
        <DropdownMultiple
          options={options}
          selected={filterStatus}
          setSelected={setFilterStatus}
        />
        <button type="button">
          <div>
            <IconPlus />
          </div>
          New Invoice
        </button>
      </Header>
      <InvoicesList invoices={invoices.data} />
    </Container>
  );
};

export default Invoices;
