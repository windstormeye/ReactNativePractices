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


export default class App extends Component<{}> {
  // 初始化 render相当于ViewDidLoad 返回具体的组件内容
  render() {
    // 通过return来返回
    return (
      <View style={styles.container}>
        <TextInput style={ styles.textInputStyle }
                   keyboardType={'number-pad'}
                   // value={'emmmmm'}
                   // multiline={true}
                   placeholder={'emmm'}
                   clearButtonMode={'always'}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },

    textInputStyle: {
        marginTop: 25,
        height:100,
        width:200,
        borderWidth: 1,
        borderColor: '#e8e8e8'
    }


});
