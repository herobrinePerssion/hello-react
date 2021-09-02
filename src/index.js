/*
 * @Author: arron Zhu <朱桂峰 1274294199@qq.com>
 * @Date: 2021-09-02 10:25:58
 * @lastEditor: arron Zhu
 * @LastEditTime: 2021-09-02 10:39:30
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header/index.js'




ReactDOM.render(
  <React.StrictMode>
 <Header></Header>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
