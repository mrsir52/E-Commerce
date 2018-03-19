import React from 'react'
import {Button, Input} from 'mdbreact';

import './cart.css'
import Navbar from './Navbar'
import FooterPage from "./Footer";


export class Shipping extends React.Component {


    render (){
        return (

            <div>
                <section>
                <Navbar/>
                </section>
                <section className="container card form-top">
                    <div className="row">
                        <div className="col-lg-3">
                        </div>

                        <div className="col">

                                <form>
                                    <h2 className="mb-5">Shipping Information</h2>
                                    <p className="h5 text-center mb-4">Enter your email address</p>
                                    <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                                    <br/>
                                    <h6>Already have an account?<br/><a href="/Newlogin">Sign in</a></h6>
                                    <Input label="First Name"/>
                                    <Input label="Last Name"  />
                                    <Input label="Address"/>
                                    <Input label="Apt/Suite/Etc"/>
                                    <Input label="City" />
                                    <Input label="State" />
                                    <Input label="Zipcode" />
                                    <div className="text-center">
                                        <a href="/Payment">
                                        <Button color="primary">Continue</Button>
                                        </a>
                                    </div>
                                </form>

                        </div>

                        <div className="col-lg-3">
                        </div>

                    </div>
                </section>

            </div>
    )
    }
    }

    export default Shipping