import React,{Component} from 'react'
import TopBar from '../TopBar/TopBar'
import {Switch, Route, Redirect} from 'react-router-dom'

import 'antd-mobile/dist/antd-mobile.css'

export default class App extends Component {
    render () {
        return (
            <div className='app_container' style={{background: '#f9f9f9'}}>
                <Route path='/' component={TopBar} />
                <Redirect to='/main' />
            </div>
        )
    }
}
