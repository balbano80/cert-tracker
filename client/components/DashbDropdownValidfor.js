import React from 'react';
import { Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class DropdownValid extends React.Component {
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
            <div className="container" icon="exclamation">
              
              
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    
                    <DropdownToggle caret color="default" style={{ width: "100%" }}>
                    Months
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="#">3 months</DropdownItem>
                        <DropdownItem href="#">6 months</DropdownItem>
                        <DropdownItem href="#">12 months</DropdownItem>
                    </DropdownMenu>
                    
                </Dropdown>
        
              
            </div>
        );
    }
};

export default DropdownValid;