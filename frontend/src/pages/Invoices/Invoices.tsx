import React, { useState } from "react";
import DropdownMultiple, { Option } from "../../components/DropdownMultiple/DropdownMultiple";
import { Header, TitleContainer, Container } from "./styles";
import IconPlus from "../../assets/icon-plus.svg?component";

const options : Array<Option> = [
  { value: 'Draft', text: 'Draft' },
  { value: 'Pending', text: 'Pending' },
  { value: 'Paid', text: 'Paid' }
];

const Invoices = (): JSX.Element => {
  const [filterStatus, setFilterStatus] = useState<String>('');

  return (
    <Container>
      <Header>
        <TitleContainer>
          <h1>Invoices</h1>
          <sub>There are 7 total invoices</sub>
        </TitleContainer>
        <DropdownMultiple options={options} selected={filterStatus} setSelected={setFilterStatus}/>
        <button>
          <div>
            <IconPlus />
          </div>
          New Invoice
        </button>
      </Header>
    </Container>
  );
};

export default Invoices;
