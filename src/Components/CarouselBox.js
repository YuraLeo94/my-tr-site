import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

import photo2 from '../media/photo2.jpg';
import photo3 from '../media/photo3.jpg';
import photo4 from '../media/photo4.jpg';

class CarouselBox extends Component {
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo2}
                        alt="Photo2"
                    />
                    <Carousel.Caption>
                        <h3>Nature image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo3}
                        alt="Photo3"
                    />
                    <Carousel.Caption>
                        <h3>Nature image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo4}
                        alt="Photo4"
                    />
                    <Carousel.Caption>
                        <h3>Nature image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </Carousel.Caption>
                </Carousel.Item> 
                    
                
            </Carousel>
        )
    }
}

export default CarouselBox;