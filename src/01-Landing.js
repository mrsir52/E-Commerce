import React from 'react';
import { Button } from 'mdbreact';
import './App.css';
import FooterPage from "./Footer";
import Navbar from './Navbar'

export default class extends React.Component {
    render (){
        return (
            <div>
                <Navbar />
                <section className="navbar-section">
                    </section>
                        <section className="main-section row">
                            <div className='col-7 '>
                            </div>
                            <div className="col-5 main-button-div">
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>

                                <a href="/Product">
                                <Button size="md" outline color="white">Learn More</Button>
                                </a>
                                <a href="/Cart">
                                    <Button size="md" color="elegant"><strong>Buy Now</strong></Button>
                                </a>
                            </div>
                        </section>


                <section className="vid-section container">
                    <div className="row justify-content-around">
                        <div className="col col-lg-auto">
                            <iframe title="h20 ninja video" width="560" height="315" src="https://www.youtube.com/embed/uvr-c_9iqhw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>

                            </iframe>
                        </div>

                        <div className="col col-lg-auto">
                            <iframe title="h20 ninja video" width="560" height="315" src="https://www.youtube.com/embed/T_Akmd2BaVU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>

                            </iframe>
                        </div>
                    </div>
                </section>
                <FooterPage/>
            </div>
        )
    }
}
