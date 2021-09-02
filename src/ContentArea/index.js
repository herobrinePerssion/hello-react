/*
 * @Author: arron Zhu <朱桂峰 1274294199@qq.com>
 * @Date: 2021-09-02 20:02:47
 * @lastEditor: arron Zhu
 * @LastEditTime: 2021-09-02 20:16:25
 * @Description: 内容区域的设置
 */
import React, { Component } from 'react';

class index extends Component {
constructor(){
super()
this.state={isLiked:false}
}
handleClick(){
   this.setState({
      isLiked: !this.state.isLiked
    })
}
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>{
        this.state.isLiked===true?'取消':'点赞'
        }</button>
      </div>
    );
  }
}

export default index;