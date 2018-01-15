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
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  // 初始化 render相当于ViewDidLoad 返回具体的组件内容
  render() {
    // 通过return来返回
    return (
      <View style={styles.container}>
        <View style={styles.innerView}>
            <Text>这是里面的一个View</Text>
        </View>
          <View style={styles.innerView2}>
              <Text>这是里面的一个View</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: 300,
        height: 100,
        flexDirection: 'row'
    },
    innerView: {
        backgroundColor: 'green',
        width: 100,
        height: 50
    },
    innerView2: {
        backgroundColor: 'yellow',
        width: 100,
        height: 50
    }

});
