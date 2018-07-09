import React from 'react';
import { SelectOption } from 'mdbreact';


const DropdownOption = props => (
    <SelectOption triggerOptionClick={() => props.optionClick(props.crew_type)}> 
       {props.id}: {props.crew_type}
    </SelectOption>
);

export default DropdownOption;