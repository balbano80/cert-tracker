import React from 'react';
import { SelectOption } from 'mdbreact';


const MultipleSelectOption = props => (
    <SelectOption triggerOptionClick={() => props.optionClick2(props.id)}>
        {props.id}: {props.name}
    </SelectOption>
);

export default MultipleSelectOption;