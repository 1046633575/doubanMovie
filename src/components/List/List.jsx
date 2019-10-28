import React,{Component} from 'react'

import './List.css'

export default class MyList extends Component {

    state = {
        data: []
    }

    componentWillReceiveProps(newProps) {
        const data = newProps.list.slice(0,6)
        this.setState({data})
    }

    render () {
        return (
            <div className='list'>
                <div className='list_content'>
                    {
                        this.state.data.map((item, index) =>
                            // onClick 点击跳转至电影详情 传递 id
                            <div className='list_item' onClick={() => {this.props.history.push('/movieDetail/' + item.id)}}  key={index}>
                                <img className='img' src={item.images.large} alt=""/>
                                <p>{item.title}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
