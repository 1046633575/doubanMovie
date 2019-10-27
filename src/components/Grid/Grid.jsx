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
        }))
        this.setState({data})
    }

    render () {
        // if (this.state.data) {
        //     const data = this.state.data.map((item, i) => ({
        //         icon: this.props.imgFlag ? item.images.small : item.subject.images.small,
        //         text: this.props.imgFlag ? item.title : item.subject.title,
        //     }))
        // } else {
        //     const data = new Array(9).map(item => {
        //         icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png'
        //     })
        // }

        return (
            <div>
                <Grid data={this.state.data} activeStyle={false} columnNum={3}/>
            </div>
        )
    }
}
