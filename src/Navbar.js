import React from 'react';
import { Navbar, Fa, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './cart.css'


export default class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="primary-color-dark" dark expand="md">
                    <NavbarBrand href="/"></NavbarBrand>
                    {!this.state.isWideEnough && <NavbarToggler onClick ={this.onClick} />}
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav className="mr-auto" onClick={this.onClick}>
                            <NavItem>
                                <a className="nav-link" href="/">Home</a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" href="/Product">Product Page</a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" href="/Cart"><i className="fa fa-shopping-cart icon-size" aria-hidden="true"></i></a>
                            </NavItem>
                        </NavbarNav>
                        <NavbarNav className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="https://facebook.com/"><Fa icon="facebook" /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="https://twitter.com/"><Fa icon="twitter" /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="https://instagram.com/"><Fa icon="instagram" /></NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

