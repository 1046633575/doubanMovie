import React,{Component} from 'react'
import {getTop250} from '../../axios'
import MyMovieList from '../../components/MovieList/MovieList'
import {Icon} from "antd-mobile";
import './top250.css'

export default class Top extends Component {

    state = {
        list: [],
        flag: false
    }

    componentWillMount() {
        getTop250().then(res => {
            if(res.status === 200) {
                this.setState({list: res.data.subjects, flag: true})
                console.log(res)
            }
        })
    }

    render() {
        const {list, flag} = this.state
        return (
            <div className='top250'>
                {/*在数据获取前呈现加载动画*/}
                {
                    flag ? '' : <div className="loading_container"><Icon type="loading" size='lg'/><p>加载中...<br/>接口慢，请耐心等待</p></div>
                }
                <MyMovieList history={this.props.history} arr={list}/>
            </div>
        )
    }
}
