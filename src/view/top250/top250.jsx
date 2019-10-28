import React,{Component} from 'react'
import {getTop250} from '../../axios'
import MyMovieList from '../../components/MovieList/MovieList'

export default class Top extends Component {

    state = {
        list: []
    }

    componentWillMount() {
        getTop250().then(res => {
            if(res.status === 200) {
                console.log(res)
                this.setState({list: res.data.subjects})
            }
        })
    }

    render() {
        return (
            <div>
                <MyMovieList arr={this.state.list}/>
            </div>
        )
    }
}
