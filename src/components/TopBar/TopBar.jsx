import React,{Component} from 'react'
import { TabBar, Icon } from 'antd-mobile'
import {Switch, Route, Redirect} from 'react-router-dom'
import Main from '../../view/main/main'
import Top250 from '../../view/top250/top250'
import Me from '../../view/me/me'

import './TopBar.css'

export default class TopBar extends Component {

    state = {
        selected: 'Main'
    }

    handleChange = (str) => {
        this.setState({selected : str})
    }

    render () {
        return (

            <div className="container">
                <div style={{height: '100%', maxWidth: '640px'}}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                    >
                        <TabBar.Item
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(http://www.bgwm.fun/picture/images/dianying.png) center center /  21px 21px no-repeat' }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(http://www.bgwm.fun/picture/images/dianying_active.png) center center /  21px 21px no-repeat' }}
                            />
                            }
                            title="首页"
                            key="Main"
                            selected={this.state.selected === 'Main'}
                            onPress={() => {
                                this.handleChange('Main')
                                this.props.history.push('/main')
                            }}
                        >
                            <Route path='/main' component={Main} />
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(http://www.bgwm.fun/picture/images/paihang.png) center center /  21px 21px no-repeat' }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(http://www.bgwm.fun/picture/images/paihang_active.png) center center /  21px 21px no-repeat' }}
                                />
                            }
                            title="TOP250"
                            key="top250"
                            selected={this.state.selected === 'Top250'}
                            onPress={() => {
                                this.handleChange('Top250')
                                this.props.history.push('/top250')
                            }}
                        >
                            <Route path='/top250' component={Top250} />
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(http://www.bgwm.fun/picture/images/wode.png) center center /  21px 21px no-repeat' }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(http://www.bgwm.fun/picture/images/wode_active.png) center center /  21px 21px no-repeat' }}
                                />
                            }
                            title="我的"
                            key="Me"
                            selected={this.state.selected === 'Me'}
                            onPress={() => {
                                this.handleChange('Me')
                                this.props.history.push('/me')
                            }}
                        >
                            <Route path='/me' component={Me} />
                        </TabBar.Item>
                    </TabBar>
                </div>
            </div>
        )
    }
}
