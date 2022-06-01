import React, { useState } from "react";
import { DropdownContainer } from "./styles";
import IconArrowDown from '../../assets/icon-arrow-down.svg?component';
import IconPlus from '../../assets/icon-plus.svg?component';

const DropdownMultiple = () : JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DropdownContainer onClick={() => setIsOpen(!isOpen)}>
            <div>Filter by status</div>
            <div className={isOpen ? 'rotate' : ''}>
                <IconArrowDown />
            </div>
        </DropdownContainer>
    )
};

export default DropdownMultiple;