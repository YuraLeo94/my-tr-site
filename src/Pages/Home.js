import React, {Component} from 'react';
import CarouselBox from '../Components/CarouselBox';
import CardBox from '../Components/CardBox';
class Home extends Component {

    render(){
        return(
            <>
            <CarouselBox />
            <CardBox/>
            </>
        )
    }
}

export default Home;