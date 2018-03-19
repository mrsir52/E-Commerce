import React from 'react'
import {Button, Input, Card, CardImage} from 'mdbreact'
import mask from './images/mask.jpg'
import mask1 from './images/mask-1.jpg'
import mask3 from './images/mask-3.jpg'
import mask4 from './images/mask-4.jpg'
import { connect } from 'react-redux'
import './cart.css'
import Navbar from './Navbar'
import FooterPage from "./Footer";
import {decreasecart, increasecart, updatecart} from "./actions";
import {Cart} from "./03-Cart";
import DropdownPage from "./Dropdown";
import DropQuant from "./DropQuant";


export class CartTable extends React.Component {


    render (){
        const { quantities, onIncrease, onDecrease, onCartupdate } = this.props;
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
                                <th>$49.95</th>
                                <th>Color</th>
                                <th>Qty</th>
                                <th>X</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                {/*<th scope="row">1</th>*/}
                                <td><CardImage className="img-fluid card-size" src={mask1}/></td>
                                <td>
                                    <DropQuant/>
                                </td>
                                <td>
                                    <Button color="black" size='sm'>Add to cart</Button>
                                </td>
                                <td><i class="fa fa-window-close" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <td><CardImage className="img-fluid card-size" src={mask3}/></td>
                                <td>
                                    <DropQuant/>
                                </td>
                                <td>
                                    <Button color="black" size='sm'>Add to cart</Button>
                                </td>
                                <td><i class="fa fa-window-close" aria-hidden="true"></i></td>
                            </tr>
                            <tr>
                                <td><CardImage className="img-fluid card-size" src={mask4}/></td>
                                <td>
                                    <DropQuant/>
                                </td>
                                <td>
                                    <Button color="black" size='sm'>Add to cart</Button>
                                </td>
                                <td><i class="fa fa-window-close" aria-hidden="true"></i></td>
                            </tr>
                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
                <div className="col-lg-2"></div>
                </div>
                <div className="container">
                <h5>Subtotal</h5>
                <a href="/Shipping">
                <h5>Checkout</h5>
                </a>
                    <p>{quantities}</p>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quantities: state.quantities
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrease() {
            return dispatch(increasecart())
        },
        onDecrease() {
            return dispatch(decreasecart())
        },
        onCartupdate() {
            return dispatch(updatecart () );
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable)