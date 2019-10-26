import React,{Component} from 'react'
import TopBar from '../TopBar/TopBar'
import {Switch, Route, Redirect} from 'react-router-dom'

export default class App extends Component {
    render () {
        return (
            <div className='app_container'>
                <Route path='/' component={TopBar} />
                <Redirect to='/main' />
            </div>
        )
    }
}
