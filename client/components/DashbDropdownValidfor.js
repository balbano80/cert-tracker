import React from 'react';
import { Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

class DropdownValid extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            dropdownOpen: false,
            selectValue:"",
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
            <div className="container" icon="exclamation">
              
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    
                    <DropdownToggle caret color="default" style={{ width: "100%" }} value={this.state.selectValue} onClick={this.handleChange}>
                    Months
                    </DropdownToggle>

                    <DropdownMenu>
                    

                        <DropdownItem name= "validFor" value="3 months" >3 months</DropdownItem>
                        <DropdownItem name= "validFor" value="6 months" >6 months</DropdownItem>
                        <DropdownItem name= "validFor" value="12 months">12 months</DropdownItem>
                    
                    
                    </DropdownMenu>
            
                    
                </Dropdown>
        
            </div>
        );
    }
};

export default DropdownValid;