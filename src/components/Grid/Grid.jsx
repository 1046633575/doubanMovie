import React,{Component} from 'react'
import {Grid} from 'antd-mobile'

import './Grid.css'

export default class MyGrid extends Component {

    state = {
        data : []
    }

    componentWillReceiveProps(newProps) {
        let data = newProps.gridArr.slice(0,6)
        data = data.map((item, i) => ({
            icon: this.props.imgFlag ? item.images.small : item.subject.images.small,
            text: this.props.imgFlag ? item.title : item.subject.title,
            id: this.props.imgFlag ? item.id : item.subject.id
        }))
        this.setState({data})
    }

    render () {

        return (
            <div>
                <Grid data={this.state.data} activeStyle={false} onClick={el => this.props.history.push('/movieDetail/' + el.id)} columnNum={3}/>
            </div>
        )
    }
}
