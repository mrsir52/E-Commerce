


import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/docs/css/mdb.min.css';
import { Button } from 'mdbreact';
import Footer from './Footer'
import Navbar from './Navbar'
import Productpage from "./Productpage";
import Cart from './Cart'






class App extends Component {
    render() {
        return (
            <div>
                <section className="navbar-section">
                    <Navbar />

                </section>
                <section className="main-section row">
                    <div className='col-8 '></div>
                    <div className="col-4 main-button-div justify-content-center">
                        <Button size="md" outline color="white">Learn More</Button>
                        <Button size="md" color="elegant"><strong>Buy Now</strong></Button>
                    </div>
                </section>


                <section className="vid-section container">


                    <div className="row justify-content-around">
                        <div className="col col-lg-auto">
                            <iframe title="h20 ninja video" width="560" height="315" src="https://www.youtube.com/embed/uvr-c_9iqhw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>

                            </iframe>
                        </div>

                        <div className="col col-lg-auto">
                            <iframe title="h20 ninja video" width="560" height="315" src="https://www.youtube.com/embed/uvr-c_9iqhw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>

                            </iframe>
                        </div>

                        <section className="page">
                            <div>
                                <Productpage/>

                            </div>
                        </section>
                        <Cart />

                        <section>


                        </section>

                    </div>






                </section>
                <Footer />
            </div>
        );
    }
}

export default App;
