import React,{Component} from 'react'
import NavBar from '../../components/NavBar/NavBar'

import './movieList.css'

export default class MovieList extends Component {

    render () {
        const data = [
            {name: '正在热映', path: '/v2/movie/in_theaters'},
            {name: '即将上映', path: '/v2/movie/coming_soon'},
            {name: '口碑榜', path: '/v2/movie/weekly'},
            {name: '新片榜', path: '/v2/movie/new_movies'}
        ]
        console.log(this.props)
        return (
            <div className='list_container'>
                <NavBar title={data[this.props.match.params.id - 1].name}/>
            </div>
        )
    }
}
