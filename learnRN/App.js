/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,  // 样式，可为组件创建样式类
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var Dimensions = require('Dimensions');
// 引入组件
var QQLoginView = require('./QQLoginView')

export default class App extends Component<{}> {
  // 初始化 render相当于ViewDidLoad 返回具体的组件内容
  render() {
    // 通过return来返回
    return (
        <QQLoginView />
    );
  }

}