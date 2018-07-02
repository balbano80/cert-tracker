import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class DropdownReminder extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
    return (
            <div className="container">
              
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret color="default" style={{ width: "100%"}}>
                    Days
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="#">90 days</DropdownItem>
                        <DropdownItem href="#">60 days</DropdownItem>
                        <DropdownItem href="#">30 days</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
};

export default DropdownReminder;

