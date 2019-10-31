import React from 'react'
import Swiper from '../../components/Swiper/Swiper'
import MyCard from "../../components/Card/Card"
import {getShowNow, getShownSoon, getMouthList, getNewsMovie} from '../../axios'
import {Icon} from "antd-mobile"
import './main.css'

export default class Main extends React.Component {

    state = {
        // 热映榜
        gridArr: [],
        // 即将上映
        list: [],
        // 口碑榜
        mouthList: [],
        // 新片榜
        newsList: [],
        // 加载动画
        loadingFlag: false
    }

    componentDidMount(){
        // 正在热映
        getShowNow().then(res => {
            console.log("开始了")
            if(res.status === 200) {
                this.setState({gridArr: res.data.subjects, loadingFlag: true})
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
                this.setState({mouthList: res.data.subjects})
            }
        })
        // 新片榜
        getNewsMovie().then(res => {
            if(res.status === 200) {
                this.setState({newsList: res.data.subjects})
            }
        })
    }

    render() {
        const swipers = ['http://www.bgwm.fun/picture/images/douban_img05.jpg','http://www.bgwm.fun/picture/images/douban_img06.jpg','http://www.bgwm.fun/picture/images/douban_img07.jpg','http://www.bgwm.fun/picture/images/douban_img01.jpg']
        const {loadingFlag} = this.state
        return (
               <div className='main'>
                   {
                       loadingFlag ? '' : <div className="loading_container"><Icon type="loading" size='lg'/><p>加载中...<br/>接口慢，请耐心等待</p></div>
                   }
                   <Swiper swipers={swipers}></Swiper>
                   {/*传递id为了在查看详情时区分开来，*/}
                   <MyCard title='正在热映' id={1} history={this.props.history} gridArr={this.state.gridArr} gridFlag={true} imgFlag={true}/>
                   <MyCard title='即将上映' id={2} history={this.props.history} list={this.state.list}/>
                   <MyCard title='口碑榜' id={3} history={this.props.history} gridArr={this.state.mouthList} gridFlag={true} imgFlag={false}/>
                   <MyCard title='新片榜' id={4} history={this.props.history} list={this.state.newsList}/>
               </div>
        )
    }
}
