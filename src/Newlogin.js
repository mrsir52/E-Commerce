import React from 'react'
import {Button, Input} from 'mdbreact';

import './cart.css'
import Navbar from './Navbar'
import FooterPage from "./Footer";


export class Newlogin extends React.Component {


    render (){
        return (

            <div>
                <section>
                    <Navbar/>
                </section>
                <section className="container form-top">
                    <div className="row">
                        <div className="col-lg-4">
                        </div>

                        <div className="col card">

                            <form>
                                <h3>Login</h3>
                                <p className="h5 text-center mb-4">Sign in</p>
                                <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                                <Input label="Type your password" icon="lock" group type="password" validate/>
                                <div className="text-center">
                                    <a href="/Payment">
                                        <Button color="primary">Login</Button>
                                    </a>
                                </div>
                            </form>
                        <div>
                            <p>New Customer</p><a href="/Createaccount"><p>Create Account</p></a>

                            <p>Need help loggin in?</p>
                        </div>
                            <a href="/Shipping"><p>Continue as guest</p></a>

                            <Button color="black">Continue</Button>
                        </div>

                        <div className="col-lg-4">
                        </div>

                    </div>
                </section>

            </div>
        )
    }
}

export default Newlogin