import React from 'react';
import { Button, CarouselItem, CarouselCaption, CarouselControl, Carousel, CarouselInner } from 'mdbreact';
import './App.css';
import FooterPage from "./Footer";
import Navbar from './Navbar'

import bground2 from './images/background.jpg'
import back1 from './images/back1.png'
import CartTable from "./CartTable";

export default class extends React.Component {


    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.state = {
            activeItem: 1,
            maxLength: 2
        };
    }

    next() {
        const nextItem = this.state.activeItem + 1;
        if(nextItem > this.state.maxLength) {
            this.setState({ activeItem: 1 });
        } else {
            this.setState({ activeItem: nextItem });
        }
    }

    prev() {
        const prevItem = this.state.activeItem - 1;
        if(prevItem < 1) {
            this.setState({ activeItem: this.state.maxLength });
        } else {
            this.setState({ activeItem: prevItem });
        }
    }

    goToIndex(item) {
        if (this.state.activeItem !== item) {
            this.setState({
                activeItem: item
            });
        }
    }

    render (){
        return (
            <div>
                <Navbar />
                <section className="navbar-section">
                </section>

                <section className="main-section">

                    <Carousel
                        activeItem={this.state.activeItem}
                        // next={this.next}
                        className="z-depth-1">
                        <CarouselInner>
                            <CarouselItem itemId="1">

                                <div className="view hm-black-light">

                                    <img className="d-block w-100" src={bground2} alt="First slide" />

                                </div>
                                <CarouselCaption>
                                    <a href="/Product">
                                        <Button size="lg" outline color="white">Learn More</Button>
                                    </a>
                                    <a href="/Cart">
                                        <Button size="lg" color="elegant"><strong>Buy Now</strong></Button>
                                    </a>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem itemId="2">
                                <div className="view hm-black-strong">
                                    <img className="d-block w-100" src={back1} alt="First slide" />

                                </div>
                                <CarouselCaption className="text-align-right">
                                    <a href="/Product">
                                        <Button size="lg" outline color="white">Learn More</Button>
                                    </a>
                                    <a href="/Cart-Table">
                                        <Button size="lg" color="elegant"><strong>Buy Now</strong></Button>
                                    </a>
                                </CarouselCaption>
                            </CarouselItem>


                        </CarouselInner>
                        <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
                        <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
                    </Carousel>
                    <div className='col-7 '>
                    </div>

                    {/*<div className="col-5 main-button-div">*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*<br/>*/}

                        {/*<a href="/Product">*/}
                            {/*<Button size="md" outline color="white">Learn More</Button>*/}
                        {/*</a>*/}
                        {/*<a href="/Cart">*/}
                            {/*<Button size="md" color="elegant"><strong>Buy Now</strong></Button>*/}
                        {/*</a>*/}
                    {/*</div>*/}
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

                <CartTable/>
            </div>
        )
    }
}
