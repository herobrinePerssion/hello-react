/*
 * @Author: arron Zhu <朱桂峰 1274294199@qq.com>
 * @Date: 2021-09-03 14:07:09
 * @lastEditor: arron Zhu
 * @LastEditTime: 2021-09-03 16:12:15
 * @Description: 评论输入区域
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'
class CommentInput extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }
handleSubmit(){

}
  render() {
    return (
    <div className="list-wrapper">
        <div className="list">
          <span>姓名：</span>
          <input></input>
        </div>
        <div className="list">
          <span>评论：</span>
          <textarea rows="4"></textarea>
        </div>
        <button onClick={this.handleSubmit.bind(this)}>发布</button>
      </div>
    );
  }
}

CommentInput.propTypes = {

};

export default CommentInput;