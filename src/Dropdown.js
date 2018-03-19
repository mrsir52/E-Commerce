import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';


class DropdownPage extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.state = {
            dropdownOpen: false,
            dropdownOpen1: false,
        };
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    toggle1() {
        this.setState({
            dropdownOpen1: !this.state.dropdownOpen1
        });
    }
    render() {
        return (
            <div>
                <Dropdown isOpen = { this.state.dropdownOpen1 } toggle = { this.toggle1 } size="sm">
                    <DropdownToggle caret color="primary">
                        Choose Color
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Black</DropdownItem>
                        <DropdownItem>Aqua</DropdownItem>
                        <DropdownItem>Blue</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}
export default DropdownPage;