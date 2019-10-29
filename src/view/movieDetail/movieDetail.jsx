import React,{Component} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import {getMovieDetail} from '../../axios'
import Score from '../../components/Score/Score'
import './movieDetail.css'

export default class MovieDetail extends Component {

    state = {
        data: {images: {small: ''}, rating: {average: ''}}
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
        getMovieDetail(id).then(res => {
            console.log(res.data.rating.average)
            this.setState({data: res.data})
        })
    }

    render () {
        const {data} = this.state
        return (
            <div className='detail_container' >
                <img className='detail_bg' src={data.images.small} alt=""/>
                <div className="detail_content">
                    <NavBar title={data.title}/>
                    <div className="detail_top">
                        <img className='top_left' src={data.images.small}/>
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
                        <p>{data.summary}</p>
                    </div>
                    <div className="detail_bottom"></div>
                </div>
            </div>
        )
    }
}
