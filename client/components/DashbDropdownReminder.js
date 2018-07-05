import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class DropdownReminder extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            dropdownOpen: false,
            selectValue:""
        };
    }

    
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            
        });
    }

    handleChange = event => {
        this.setState(
            {selectValue: event.target.value});
       
    }

    render() {
    return (
            <div className="container">   
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret color="default" style={{ width: "100%"}}>
                    Days
                    </DropdownToggle>

                    <DropdownMenu value={this.state.selectValue} onClick={this.handleChange}>
                    

                        <DropdownItem name= "reminder1" value="30 days">30 days</DropdownItem>
                        <DropdownItem name= "reminder2" value="60 days">60 days</DropdownItem>
                        <DropdownItem name= "reminder3" value="90 days">90 days</DropdownItem>
            
                    
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
};

export default DropdownReminder;

