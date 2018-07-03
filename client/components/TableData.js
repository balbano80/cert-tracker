import React from 'react';


const TableData = props => (
    <tr>
        <td>
            {props.name}
            <span onClick={() => props.removeElement(props.id)} className="remove"> 𝘅 </span>
        </td>
    </tr>
);

export default TableData;