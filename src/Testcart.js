import React from 'react'
import {Button, Input, CardImage} from 'mdbreact';
import mask from './images/mask.jpg'
import './cart.css'
import Navbar from './Navbar'
import FooterPage from "./Footer";


export class Testcart extends React.Component {


    render (){
        return (

            <div>
              <section>
                  <Navbar/>
              </section>

                <div className="container-fluid row">
                    <div className="col-lg-5">

                        <CardImage className="img-fluid" src={mask} />

                    </div>

                    <div className="col lg4">
                        <thead class="blue-grey lighten-4">
                        <tr>
                            <th>Color</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        </tbody>

                    </div>


                </div>
            </div>
        )
    }
}

export default Testcart