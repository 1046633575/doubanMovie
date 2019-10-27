import React from 'react'
import Swiper from '../../components/Swiper/Swiper'
import MyCard from "../../components/Card/Card";

import {getShowNow, getShownSoon, getMouthList, getNewsMovie} from '../../axios'

export default class Main extends React.Component {

    state = {
        // 热映榜
        gridArr: [],
        // 即将上映
        list: [],
        // 口碑榜
        mouthList: [],
        // 新片榜
        newsList: []
    }

    componentWillMount(){
        // 正在热映
        getShowNow().then(res => {
            if(res.status === 200) {
                this.setState({gridArr: res.data.subjects})
            }
        })
        // 即将上映
        getShownSoon().then(res => {
            if(res.status === 200) {
                this.setState({list: res.data.subjects})
            }
        })
        // 口碑榜
        getMouthList().then(res => {
            if(res.status === 200) {
                console.log(res)
                this.setState({mouthList: res.data.subjects})
            }
        })
        // 新片榜
        getNewsMovie().then(res => {
            if(res.status === 200) {
                console.log(res)
                this.setState({newsList: res.data.subjects})
            }
        })
    }

    render() {
        const swipers = ['http://www.bgwm.fun/picture/images/douban_img05.jpg','http://www.bgwm.fun/picture/images/douban_img06.jpg','http://www.bgwm.fun/picture/images/douban_img07.jpg','http://www.bgwm.fun/picture/images/douban_img01.jpg']
        return (
            <div>
                <Swiper swipers={swipers}></Swiper>
                <MyCard title='正在热映' gridArr={this.state.gridArr} gridFlag={true} imgFlag={true}/>
                <MyCard title='即将上映' list={this.state.list}/>
                <MyCard title='口碑榜' gridArr={this.state.mouthList} gridFlag={true} imgFlag={false}/>
                <MyCard title='新片榜' list={this.state.newsList}/>
            </div>
        )
    }
}
