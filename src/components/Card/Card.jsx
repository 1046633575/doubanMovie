import React,{Component} from 'react'
import {Card, WhiteSpace} from 'antd-mobile'
import MyGrid from '../Grid/Grid'
import MyList from '../List/List'
import {Link} from 'react-router-dom'

import './Card.css'

export default class MyCard extends Component {

    render () {
        return (
            <div>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title={this.props.title}
                        extra={<Link to={`movieList/${this.props.id}`} style={{fontSize: 14}}>更多>></Link>}
                    />
                    <Card.Body>
                        {/*条件渲染，如果传入的 gridFlag 为 true 渲染 Grid 组件，否则渲染 List 组件*/}
                        {
                            this.props.gridFlag ? <MyGrid gridArr={this.props.gridArr} imgFlag={this.props.imgFlag}/> : <MyList list={this.props.list}/>
                        }
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
