import React,{Component} from 'react'

import './Score.css'

export default class Score extends Component {

    state = {
        //设置默认背景图
        starNum:['star0','star0','star0','star0','star0']
    }

    componentDidMount(){
        //将传过来的类似7.3数字进行四舍五入再除2，得到的是类似2,3.5,6这种值
        this.getStar(Math.round(Number(this.props.star))/2+1)
    }
    getStar(num) {
        //当num=3.5时遍历后newStar数组变成['star2','star2','star2','star1','star0','star0']
        let newStar = this.state.starNum.map((item) => {
            --num
            //两次三目运算
            return num >= 1 ? 'star2' : ((num > 0) ? 'star1' : 'star0')
        })
        this.setState({
            //设置state为遍历后的新数组
            starNum: newStar
        })
    }

    render () {
        return (
            <div className='star_container'>
                <span className="star">
                {
                    this.state.starNum.map((item, index)=>{
                        return <span className={item} key={index}></span>
                    })
                }
                </span>
                <span className='num'>{this.props.star === 0 ? '暂无评分' : this.props.star}</span>
            </div>
        )
    }
}
