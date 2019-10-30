import React,{Component} from 'react'
import Score from '../Score/Score'

import './MovieList.css'

export default class MovieList extends Component {

    state = {
        arr: []
    }

    componentWillReceiveProps(newProps) {
        this.setState({arr: newProps.arr})
    }

    formatDetail = (item) => {
        let str = ''
        if(this.props.num == 3){
            str += item.subject.pubdates[0]
            str += this.forInItem(item.subject.genres,false)
            str += this.forInItem(item.subject.casts,true)
        } else{
            str += item.pubdates[0]
            str += this.forInItem(item.genres,false)
            str += this.forInItem(item.casts,true)
        }
        return str
    }

    /**
     * 传入数组，遍历每一项组合成字符串返回
     *  ['你','好'] => '你好'
     * @param arr 数组
     * @param nameFlag 是否有 name
     */
    forInItem = (arr,nameFlag) => {
        let str = ''
        if(nameFlag) {
            for(let i in arr){
                str += arr[i].name + '/'
            }
        } else {
            for(let i in arr) {
                str += arr[i] + '/'
            }
        }
        return str
    }

    render () {
        return (
            <div className='movieList'>
                {
                    this.state.arr.map((item,index) =>
                        <div className='list_item' onClick={() => {this.props.history.push('/movieDetail/' + item.id)}}>
                            <div className="num">{index + 1}</div>
                            <div className="left">
                                <img src={this.props.num == 3 ? item.subject.images.small : item.images.large} alt=""/>
                            </div>
                            <div className="center">
                                <p className='title'>{this.props.num == 3 ? item.subject.title : item.title}</p>
                                <p className='detail'>{this.formatDetail(item)}</p>
                            </div>
                            <div className="right">
                                <Score star={this.props.num == 3 ? item.subject.rating.average : item.rating.average}/>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
