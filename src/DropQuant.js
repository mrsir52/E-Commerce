import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';


class DropQuant extends React.Component {
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
                    <DropdownToggle caret color="black">
                        Quantity
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>1</DropdownItem>
                        <DropdownItem>2</DropdownItem>
                        <DropdownItem>3</DropdownItem>
                        <DropdownItem>4</DropdownItem>
                        <DropdownItem>5</DropdownItem>
                        <DropdownItem>6</DropdownItem>
                        <DropdownItem>7</DropdownItem>
                        <DropdownItem>8</DropdownItem>
                        <DropdownItem>9</DropdownItem>
                        <DropdownItem>10</DropdownItem>
                        {/*<DropdownItem>11</DropdownItem>*/}
                        {/*<DropdownItem>12</DropdownItem>*/}
                        {/*<DropdownItem>13</DropdownItem>*/}
                        {/*<DropdownItem>14</DropdownItem>*/}
                        {/*<DropdownItem>15</DropdownItem>*/}
                        {/*<DropdownItem>17</DropdownItem>*/}
                        {/*<DropdownItem>18</DropdownItem>*/}
                        {/*<DropdownItem>19</DropdownItem>*/}
                        {/*<DropdownItem>20</DropdownItem>*/}
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}
export default DropQuant;