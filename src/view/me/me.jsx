import React,{Component} from 'react'
import Score from '../../components/Score/Score'
import './me.css'

export default class me extends Component {

    state = {
        // 收藏的影片
        movies: []
    }

    // 获取 localStorage 所有收藏的影片
    componentDidMount() {
        const arr = JSON.parse(localStorage.getItem('movies'))
        this.setState({movies: arr})
    }

    // 取消收藏
    deleteItem(index) {
        const {movies} = this.state
        movies.splice(index, 1)
        // 同步 state
        this.setState({movies})
        // 同步 lcoalStorage
        localStorage.setItem('movies', JSON.stringify(movies))
    }

    render(){
        const {movies} = this.state
        return (
            <div className='me_container'>
                <h3>我的收藏</h3>
                {
                    movies ?  movies.map((item,index) =>
                        <div className='movieItem' key={index}>
                            <div className="img"><img src={item.img} alt=""/></div>
                            <div className="message">
                                <p>{item.title}</p>
                                <Score star={item.average}/>
                            </div>
                            <div className='delete'>
                                <button onClick={() => this.deleteItem(index)}>取消收藏</button>
                            </div>
                        </div>
                    ) : <h3>没有收藏的影片,快去收藏吧！</h3>
                }
            </div>
        )
    }
}
