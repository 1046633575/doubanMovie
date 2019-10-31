import React,{Component} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import {getMovieDetail, getMovieComment} from '../../axios'
import Score from '../../components/Score/Score'
import {Toast} from "antd-mobile";
import './movieDetail.css'

export default class MovieDetail extends Component {

    state = {
        data: {images: {small: ''}, rating: {average: ''}},
        comments: [],
        collectionFlag : false
    }

    // 收藏或取消收藏 用到 localStorage
    collection = (data) => {
        // 组合一个对象，用于存储在 localStorage 中
        const movieObj = {
            id: data.id,
            title: data.title,
            img: data.images.small,
            // 评分
            average: data.rating.average

        }
        // 获取到本地存储对象 localStorage
        let arr = JSON.parse(localStorage.getItem('movies'))
        if(arr !== null) {
            // 说明已创建 localStorage 对象
            // 遍历每一项，存在 id 相同的一项，删除； 不存在，添加
            // findIndex 找出符合条件的项并返回索引
            const index = arr.findIndex(item => item.id === movieObj.id)
            if(index !== -1){
                // 删除
                arr.splice(index,1)
                // Toast 提示
                Toast.success('取消收藏', 1,()=>{},false)
                // 同步 state 熄灭收藏图标
                this.setState({collectionFlag: false})
            } else {
                // 添加
                arr.push(movieObj)
                // Toast 提示
                Toast.success('收藏成功', 1,()=>{},false)
                // 同步 state 点亮收藏图标
                this.setState({collectionFlag: true})
            }
            // 同步 localStorage
            localStorage.setItem('movies', JSON.stringify(arr))
        } else{
            // localStorage 对象未创建
            let arr = []
            arr.push(movieObj)
            // 同步 state 点亮收藏图标
            this.setState({collectionFlag: true})
            localStorage.setItem('movies', JSON.stringify(arr))
        }
    }

    // 整合电影详细信息并返回
    formatDetail = () => {
        const {data} = this.state
        // 当获取到 data 时执行，避免报错 undefined
        if(data.pubdates) {
            // 国家   如：美国 英国 /
            const country = this.forInItem(data.countries)
            //类别    如：犯罪 暴力 /
            const category = this.forInItem(data.genres)
            //上映时间    如：上映时间：1994-09-01(戛纳电影节)
            const time = '上映时间：' + data.pubdates[0]
            //片长    如：片长：142分钟
            const longTime = '片长：' + data.durations[0]
            return country + ' / ' + category + ' / ' + time + ' / ' + longTime
        }
    }

    /**
     * 传入数组，遍历每一项组合成字符串返回
     *  ['你','好'] => '你好'
     * @param arr 数组
     */
    forInItem = (arr) => {
        let str = ''
        for(let i in arr){
            str += arr[i] + ' '
        }
        return str
    }

    componentDidMount() {
        // 从路由地址中取到 id
        const id = this.props.match.params.id
        // 获取电影详情
        getMovieDetail(id).then(res => {
            this.setState({data: res.data})
        })
        // 获取评论
        getMovieComment(id).then(res => {
            if(res.status === 200){
                this.setState({comments: res.data.comments})
            }
        })
        // 获取 localStorage 查看是否被收藏
        const arr = JSON.parse(localStorage.getItem('movies'))
        if(arr) {
            const index = arr.findIndex(item => item.id === id)
            if(index !== -1) {
                // 表示已收藏
                this.setState({collectionFlag: true})
            }
        }
    }

    render () {
        const {data, comments, collectionFlag} = this.state
        return (
            <div>
                <NavBar title={data.title}/>
                <div className='detail_container' >

                    <img className='detail_bg' src={data.images.small} alt=""/>
                    <div className="detail_content">

                        <div className="detail_top">
                            <div className="top_left">
                                <img src={data.images.small}/>
                                {/*点击收藏*/}
                                <div className="collection" onClick={() => this.collection(data)}>
                                    {
                                        collectionFlag  ? <img src='http://www.bgwm.fun/picture/images/shoucang_over.png'/> : <img src='http://www.bgwm.fun/picture/images/shoucang.png'/>
                                    }
                                </div>
                            </div>
                            <div className="top_right">
                                <h2>{data.title}</h2>
                                {
                                    data.rating.average ? <Score star={data.rating.average}/> : ''
                                }
                                <p>{this.formatDetail()}</p>
                            </div>
                        </div>
                        <div className="detail_center">
                            <h3>简介</h3>
                            <div className="center_content">
                                <p>{data.summary}</p>
                            </div>
                        </div>
                        <div className="detail_bottom">
                            <div className="bottom_bg"></div>
                            <div className="bottom_content">
                                <h3>短评</h3>
                                <div className="bottom_items">
                                    {
                                        comments.map((item,index) => (
                                            <div key={index} className="bottom_item">
                                                <div className="item_top">
                                                    <img src={item.author.avatar} alt=""/>
                                                    <div className="message">
                                                        <p>{item.author.name}</p>
                                                        <span>{item.created_at}</span>
                                                    </div>
                                                </div>
                                                <div className="item_content">
                                                    {item.content}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
