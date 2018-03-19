import React from 'react'
import { connect } from 'react-redux'
import {increasecart, decreasecart, updatecart} from './actions'
import {Button, CardImage} from 'mdbreact';
import mask from './images/mask.jpg'
import './cart.css'
import Navbar from './Navbar'
import FooterPage from "./Footer";
import Shipping from './Shipping'
import DropdownPage from "./Dropdown";
import Newlogin from "./Newlogin";
import Createaccount from "./Createaccount";


export class Cart extends React.Component {


    render (){
        const { quantities, onIncrease, onDecrease, onCartupdate } = this.props;
        return (
            <div>
                <Navbar />
                <div className="container-fluid cart-info">

                    <div className="container cart-div card">

                        <div className="cart-content">

                            <div className="col-lg-5 image-div">

                                    <CardImage className="img-fluid" src={mask} />

                            </div>

                            {/*<div className="col-sm-4 dropdown-div">*/}
                                {/*/!*<section>*!/*/}

                                    {/*<DropdownPage/>*/}
                                {/*/!*</section>*!/*/}
                            {/*</div>*/}
                                <div className="col-lg-5 counter-div">

                                    <Button color="primary" size="sm" onClick={onDecrease}><i className="fas fa-lg fa-minus"></i></Button>
                                    <Button color="primary">{quantities}</Button>
                                    <Button color="primary" size="sm" onClick={onIncrease}><i className="fas fa-lg fa-plus"></i></Button>
                                    <br/>
                                    <br/>
                                    <Button color="primary" size="sm" onClick={onCartupdate}>Update Cart</Button>
                                    <br/>
                                    <br/>
                                    <section>
                                        Subtotal {this.props.quantities * 49}
                                        <br/>
                                        <a href="/Shipping">
                                        <Button color="black">Continue</Button>
                                        </a>
                                    </section>
                                </div>



                        </div>
                    </div>
                </div>
                <FooterPage/>

            <Newlogin/>
                <Createaccount/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart)