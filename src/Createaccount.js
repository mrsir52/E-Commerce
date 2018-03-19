import React from 'react'
import {Button, Input} from 'mdbreact';

import './cart.css'
import Navbar from './Navbar'
import FooterPage from "./Footer";


export class Createaccount extends React.Component {


    render (){
        return (

            <div>
                <section>
                    <Navbar/>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-lg-4">
                        </div>

                        <div className="col card">

                            <form>
                                <h3>Creat Account</h3>
                                <Input label="Type first name" icon="user" group type="email" validate error="wrong" success="right"/>
                                <Input label="Type your lastname" icon="user" group type="password" validate/>
                                <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                                <Input label="Type your password" icon="lock" group type="password" validate/>
                                <div className="text-center">
                                    <a href="/Payment"><Button color="primary">Create</Button></a>
                                </div>
                            </form>
                            <div>
                                <p>Returning Customer</p><a href="/Newlogin"><p>Sign In</p></a>
                                <a href="/Shipping"><p>Continue as guest</p></a>

                            </div>

                        </div>

                        <div className="col-lg-4">
                        </div>

                    </div>
                </section>

            </div>
        )
    }
}

export default Createaccount