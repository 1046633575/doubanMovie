import React,{Component} from 'react'
import { TabBar } from 'antd-mobile'
import {Switch, Route, Redirect} from 'react-router-dom'
import Main from '../../view/main'
import Top250 from '../../view/top250'
import Me from '../../view/me'

import './TopBar.css'

export default class TopBar extends Component {

    render () {
        return (
            <div className="app">
                <div style={{height: '100%', maxWidth: '640px'}}>

                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                    >
                        <TabBar.Item
                            title="首页"
                            key="Main"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                            />
                            }
                            onPress={() => this.props.history.push('/main')}
                        >
                            <Switch>
                                <Route path='/main' component={Main} />
                                <Route path='/top250' component={Top250} />
                                <Route path='/me' component={Me} />
                                <Redirect to='/main' /> // 重定向
                            </Switch>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                                />
                            }
                            title="TOP250"
                            key="top250"
                            onPress={() => this.props.history.push('/top250')}
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                                />
                            }
                            title="我的"
                            key="Me"
                            onPress={() => this.props.history.push('/me')}
                        >
                        </TabBar.Item>
                    </TabBar>
                </div>
            </div>
        )
    }
}
