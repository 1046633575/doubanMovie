import React,{Component} from 'react'
import {NavBar, Icon} from 'antd-mobile'


export default class MyNavBar extends Component {
    render () {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" size='lg' />}
                    onLeftClick={() => window.history.back()}
                >{this.props.title}</NavBar>
            </div>
        )
    }
}
