import React from 'react'
import Navbar from './Navbar'
import {Button, CardImage} from 'mdbreact';
import mask from './images/mask.jpg'

class Cart extends React.Component {

    render() {

        return (
            <div>


                    <div className="container">

                        <div className="row">

                            <div className="col-7">

                            <CardImage className="img-fluid align-content-left" src={mask}/>
                            </div>



                            <div className="col-4">
                                <div>CartQuant: {quantities}</div>
                                     <Button color="primary" onClick={onIncrease}><i class="fas fa-lg fa-plus"></i></Button>
                                     <Button color="primary" onClick={onDecrease}><i class="fas fa-lg fa-minus"></i></Button>

                            </div>

                        </div>
                    </div>

            <div>



                </div>

            </div>

        )
    }
}


export default Cart;