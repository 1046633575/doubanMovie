import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import PropTypes from 'prop-types'

import './Swiper.css'

export default class Swiper extends React.Component {

    static propTypes = {
        swipers: PropTypes.array.isRequired
    }

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
                        this.props.swipers.map((val,index) => (
                            <img
                                src={val}
                                key={index}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'))
                                    this.setState({ imgHeight: 'auto' })
                                }}
                            />
                        ))
                    }
                </Carousel>
            </WingBlank>
        );
    }
}
