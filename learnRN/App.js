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
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var Dimensions = require('Dimensions');
var allBadgeData = require('./badgeData.json');

var {width} = Dimensions.get('window');
var cols = 3;
var boxW = 100;
var boxH = 100;
var hMargin = 25;
var vMargin = (width - boxW * cols) / (cols + 1);


export default class App extends Component<{}> {
  // 初始化 render相当于ViewDidLoad 返回具体的组件内容
  render() {
    // 通过return来返回
    return (
      <View style={styles.container}>
          {this.allBadge()}
      </View>
    );
  }

  allBadge() {
      var allBadge = [];
      for (var i = 0; i < allBadgeData.data.length; i++) {
          var badge = allBadgeData.data[i];
          allBadge.push(
              <View key={i} style={styles.cellView}>
                  <Image source={{ uri: badge.icon }} style={styles.cellImageStyle} />
                  <Text style={styles.cellBottomTextStyle}> {badge.title} </Text>
              </View>
          );
      }
      return allBadge;
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    cellView: {
        alignItems: 'center',
        height: boxW,
        width: boxH,
        marginTop: hMargin,
        marginLeft: vMargin
    },

    cellImageStyle: {
        height: 100,
        width: 100
    },

    cellBottomTextStyle: {

    }

});
