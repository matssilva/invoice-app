import React, { useState } from "react";
import { DropdownContainer, Options, OptionsContainer, Container } from "./styles";
import IconArrowDown from "../../assets/icon-arrow-down.svg?component";
import Checkbox from "../Checkbox/Checkbox";

interface Props {
  options: Array<Option>;
  selected: String;
  setSelected: React.Dispatch<React.SetStateAction<String>>;
}

export interface Option {
  value: string;
  text: string;
}

const DropdownMultiple = ({
  options,
  selected,
  setSelected,
}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const renderOptions = () => {
    return options.map((option) => {
      return (
        <li key={option.value}>
          <Checkbox
            labelText={option.text}
            isChecked={selected === option.value}
            onCheck={setSelected}
            value={option.value}
          />
        </li>
      );
    });
  };

  return (
    <Container>
      <DropdownContainer onClick={() => setIsOpen(!isOpen)}>
      <div className="title">Filter by status</div>
      <div className={isOpen ? "rotate" : ""}>
        <IconArrowDown />
      </div>
    </DropdownContainer>
    {isOpen && <OptionsContainer>
        <Options>{renderOptions()}</Options>
      </OptionsContainer>}
    </Container>
    
  );
};

export default DropdownMultiple;
