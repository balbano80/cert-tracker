import React, { Component } from "react";

// MD React-Bootstrap
import {Card, CardBody, Select, SelectInput, SelectOptions, SelectOption, CardHeader} from 'mdbreact';

// Components
import DropdownOption from "./DropdownOption";

// TEMPORARY JSON files for employees/certifications
import validfor from "./temp-json/validfor.json";

class DropdownValid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            validfor,
        }

    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    // Select Crew Dropdown Value
    optionClick = (value) => {
        if (value.constructor === Array) {
            value = value.join(', ');
        }
        this.setState({ value: value });
    }

    onClick = (e) => {
        // check if select is multiple
        if (e.target.dataset.multiple === 'true') {
            return;
        }

        if (e.target.classList.contains('select-dropdown')) {
            this.otherDropdownsClose();
            if (e.target.nextElementSibling) {
                e.target.nextElementSibling.classList.add('fadeIn');
            }
        } else {
            this.otherDropdownsClose();
        }
    }

    otherDropdownsClose = () => {
        let dropdowns = document.querySelectorAll('.dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('fadeIn')) {
                dropdowns[i].classList.remove('fadeIn');
            }
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onClick);
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <Select multiple>
                        <SelectInput value="Valid For">
                        </SelectInput>
                        <SelectOptions>
                            <SelectOption disabled> Select Valid Time Range </SelectOption>
                            {this.state.validfor.map(valid => (
                                <DropdownOption
                                    key={valid.id}
                                    id={valid.id}
                                    name={valid.name}
                                    optionClick={this.optionClick}
                                />
                            ))}
                        </SelectOptions>
                    </Select>
                </CardBody>
            </Card>
        );
    }
};

export default DropdownValid;