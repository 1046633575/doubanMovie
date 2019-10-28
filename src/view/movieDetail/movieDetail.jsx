import React,{Component} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import {getMovieDetail} from '../../axios'
import './movieDetail.css'

export default class MovieDetail extends Component {

    state = {
        data: {images: {small: ''}}
    }

    componentDidMount() {
        // 从路由地址中取到 id
        const id = this.props.match.params.id
        getMovieDetail(id).then(res => {
            console.log(res.data)
            this.setState({data: res.data})
        })
    }

    render () {
        return (
            <div className='detail_container' >
                <img className='detail_bg' src={this.state.data.images.small} alt=""/>
                <NavBar title='肖生克的救赎'/>
            </div>
        )
    }
}
