import React from 'react'
import { connect } from 'react-redux'
import {increasecart, decreasecart, updatecart} from './actions'
import {Button, Card, CardImage} from 'mdbreact';
import mask from './images/mask.jpg'
import './cart.css'
import Navbar from './Navbar'
import FooterPage from "./Footer";

export class Cart extends React.Component {
    render (){
        const { quantities, onIncrease, onDecrease, onCartupdate } = this.props;
        return (
            <div>
                <Navbar />
                <div className="container-fluid cart-info">

                    <div className="container cart-div">
                        <section cart-heading>
                            <h2>Shopping Cart</h2>
                        </section>

                        <div className="row cart-content">

                            <div className="col-5">

                                <Card>
                                    <CardImage className="img-fluid" src={mask} />

                                </Card>
                            </div>



                            <div className="col cart-info">
                                <Button color="primary" size="sm" onClick={onDecrease}><i className="fas fa-lg fa-minus"></i></Button>
                                <Button color="primary">{quantities}</Button>
                                <Button color="primary" size="sm" onClick={onIncrease}><i className="fas fa-lg fa-plus"></i></Button>
                                <br/>
                                <br/>
                                <Button color="primary" size="sm" onClick={onCartupdate}>Update Cart</Button>
                                <br/>
                                <br/>
                                Subtotal {this.props.quantities * 49}

                            </div>

                        </div>
                    </div>
                </div>
                <FooterPage/>
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