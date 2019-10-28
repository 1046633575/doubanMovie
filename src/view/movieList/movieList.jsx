import React,{Component} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import MyMovieList from '../../components/MovieList/MovieList'

import './movieList.css'
import {getShowNow, getNewsMovie, getMouthList, getShownSoon} from "../../axios"

export default class MovieList extends Component {

    state = {
        data : [
            {name: '正在热映', func: getShowNow},
            {name: '即将上映', func: getShownSoon},
            {name: '口碑榜', func: getMouthList},
            {name: '新片榜', func: getNewsMovie}
        ],
        arr: []
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.state.data[id - 1].func().then(res => {
            console.log(res)
            if(res.status === 200) {
                this.setState({arr: res.data.subjects})
            }
        })
    }

    render () {
        return (
            <div className='list_container'>
                <NavBar title={this.state.data[this.props.match.params.id - 1].name}/>
                <div className='list_content'>
                    <MyMovieList arr={this.state.arr} num={this.props.match.params.id}/>
                </div>
            </div>
        )
    }
}
