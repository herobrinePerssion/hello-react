/*
 * @Author: arron Zhu <朱桂峰 1274294199@qq.com>
 * @Date: 2021-09-03 14:04:44
 * @lastEditor: arron Zhu
 * @LastEditTime: 2021-09-03 14:41:26
 * @Description: 评论页面内容
 */
import React, { Component } from 'react';
import CommentInput from './CommentInput/index'
import CommentList from './CommentList/index'
class index extends Component {
  render() {
    return (
      <div>
        <CommentInput></CommentInput>
        <CommentList></CommentList>
      </div>
    );
  }
}


export default index;