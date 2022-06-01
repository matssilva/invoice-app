import React from "react";
import DropdownMultiple from "../../components/DropdownMultiple/DropdownMultiple";
import { Header, TitleContainer, Container } from "./styles";
import IconPlus from "../../assets/icon-plus.svg?component";

const Invoices = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <TitleContainer>
          <h1>Invoices</h1>
          <sub>There are 7 total invoices</sub>
        </TitleContainer>
        <DropdownMultiple />
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
