import React from 'react';
import { SelectOption } from 'mdbreact';


const DropdownOption = props => (
    <SelectOption triggerOptionClick={() => props.optionClick(props.name)}> 
       {props.id}: {props.name}
    </SelectOption>
);

export default DropdownOption;