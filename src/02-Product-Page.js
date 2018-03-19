import React from 'react'
import Navbar from './Navbar'
import mask from './images/mask.jpg'
import mask1 from './images/mask-1.jpg'
import mask3 from './images/mask-3.jpg'
import mask4 from './images/mask-4.jpg'
import { Button, Card, CardBody, CardImage, CardText } from 'mdbreact';
import './productpage.css'
import FooterPage from "./Footer";



export default class extends React.Component {
    render (){
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <section className="main-product">
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-3">
                                <card>
                                    <CardImage className="img-fluid card-size" src={mask1}/>
                                </card>

                                <card>
                                    <CardImage className="img-fluid card-size" src={mask3}/>
                                </card>

                                <card>
                                    <CardImage className="img-fluid card-size" src={mask4}/>
                                </card>

                            </div>
                            <div className="col">

                                <CardImage className="img-fluid align-content-left" src={mask}/>


                            </div>
                            <div className="col center-prod">


                                <Card>
                                    <CardImage className="img-fluid" src="" />
                                    <CardBody>
                                        <h2>H20 Ninja</h2>

                                        <br/>
                                        <a href="/Cart">
                                        <Button size="md"color="primary">Buy Now</Button>
                                        </a>
                                        <h3>$49.95</h3>
                                        <h4><strike>$79.95</strike></h4>
                                        <br/>

                                        <h3>Product Details</h3>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

                                    </CardBody>
                                </Card>


                            </div>

                        </div>



                    </div>

                </section>
            <FooterPage/>
            </div>
        )
    }
}
