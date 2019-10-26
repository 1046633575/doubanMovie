import React from 'react'
import Swiper from '../../components/swiper/swiper'

export default function Main() {

    const swipers = ['http://www.bgwm.fun/picture/images/douban_img05.jpg','http://www.bgwm.fun/picture/images/douban_img06.jpg','http://www.bgwm.fun/picture/images/douban_img07.jpg','http://www.bgwm.fun/picture/images/douban_img01.jpg']

    return (
        <div>
            <Swiper swipers={swipers}></Swiper>
        </div>
    )
}
