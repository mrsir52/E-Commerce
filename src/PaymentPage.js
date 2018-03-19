import React from 'react'
import {Button, Input, CardImage} from 'mdbreact';
import mask from './images/mask.jpg'
import './cart.css'
import Navbar from './Navbar'
import FooterPage from "./Footer";


export class PaymentPage extends React.Component {


    render (){
        return (

            <div>
                <section>
                    <Navbar/>
                </section>

                <div className="container row">
                    <div className="col-lg-2"></div>
                    <div className="col-md-8 table-div">

                        <div className="card">
                            <div className="card-body">
                                <table class="table table-responsive-md align-content-center">

                                    <thead class="blue-grey lighten-4">
                                    <tr>
                                        <th></th>
                                        <th>Contact Information</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        {/*<th scope="row">1</th>*/}
                                        <td>Contact info</td>
                                        <td>testemail@test.com</td>
                                        <td>Edit</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Shipping information</td>
                                        <td>Address City, State, Zip</td>
                                        <td>Edit</td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
                <div className="container row">
                    <div className="col-lg-2"></div>
                    <div className="card col-lg-8">
                        <div className="card-body">
                            <table class="table table-responsive-md align-content-center">

                                <thead class="blue-grey lighten-4">
                                <tr>
                                    <th></th>
                                    <th>Credit Card Information</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    {/*<th scope="row">1</th>*/}
                                    <td>Card Number</td>
                                    <td>0000-0000-0000-0000</td>
                                    <td><i class="fa fa-lock" aria-hidden="true"></i></td>
                                </tr>
                                <tr>
                                    <td>Cardholder Name</td>
                                    <td>MM/YY</td>
                                    <td>CVV</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <div className="container">
                    <Button size="lg" color="amber darken-4">Continue with PayPal</Button>
                </div>
                <div className="container">
                    <a href="/Thankyou"><Button size="lg" color="primary">Complete Order</Button></a>
                </div>
            </div>
        )
    }
}

export default PaymentPage