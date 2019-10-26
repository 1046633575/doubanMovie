import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

import './swiper.css'

export default class Swiper extends React.Component {

    render() {
        return (
            <WingBlank className='swiper'>
                <Carousel
                    autoplay={true}
                    autoplayInterval={5000}
                    infinite
                    dotActiveStyle={{background: '#1890ff'}}
                >
                    {
                        this.props.swipers.map(val => (
                            <img src={val}/>
                        ))
                    }
                </Carousel>
            </WingBlank>
        );
    }
}
