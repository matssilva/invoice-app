import React from "react";
import { CheckboxContainer, Input, Label } from "./style";
import IconPlus from "../../assets/icon-check.svg?component";

interface Props {
    labelText: String;
    isChecked: Boolean;
    onCheck: React.Dispatch<React.SetStateAction<String>>;
    value: String;
}

const Checkbox = ({ labelText, isChecked, value, onCheck } : Props): JSX.Element => {
  return (
    <Label>
      <Input
        type="checkbox"
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => {
          e.stopPropagation();
          onCheck(value);
        }}
      />
      <CheckboxContainer
        isChecked={isChecked}
        aria-hidden="true"
      >{isChecked && <IconPlus />}</CheckboxContainer>
      <div className="labelText">{labelText}</div>
    </Label>
  );
};

export default Checkbox;
