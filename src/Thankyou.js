import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import FooterPage from "./Footer";
import Navbar from './Navbar'


class Thankyou extends React.Component {

    render() {
        return (
            <div>
                <section>
                    <Navbar/>
                </section>
                <h2>Thank you</h2>
                <a href="/"><h5>Back to home</h5></a>
                <section>
                    <FooterPage/>
                </section>
            </div>
        );
    }
}
export default Thankyou;