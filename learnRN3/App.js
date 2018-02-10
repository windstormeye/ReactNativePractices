/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
var TimerMixin = require('react-timer-mixin');
var imageData = require('./imageData.json');

type Props = {};
export default class App extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            currentPage: 0
        };
    }

    render() {
      return (
        <View style={styles.container}>
            <ScrollView
                ref={'scrollView'}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
                onScrollBeginDrag={(e) => this.onScrollBeginDrag(e)}
                onScrollEndDrag={(e) => this.onScrollEndDrag(e)}
            >
                {this.renderChildView()}
            </ScrollView>
            {/* 返回指示器 */}
            <View style={styles.pageViewStyle}>
                {this.renderPageCircle()}
            </View>
        </View>
    );
  }

  // 组件都载入完毕
  componentDidMount() {
      this.startTimer();
  }

  startTimer() {
        var scrollView = this.refs.scrollView;
        var imgCount = imageData.data.length;
        this.timer1 = setInterval(() => {
            var activePage = 0;
            if ((this.state.currentPage + 1) >= imgCount) {
                activePage = 0
            } else {
                activePage = this.state.currentPage + 1;
            }

            this.setState({
                currentPage: activePage
            });

            var offSetX = activePage * screenWidth;
            scrollView.scrollResponderScrollTo({x: offSetX , y: 0, animated: true})

         }, 1000);
  }

  // 开始拖拽
  // 需要把ScrollView自身作为参数传入
  onScrollBeginDrag(e) {
      clearInterval(this.timer1);
  }

  // 结束拖拽
  onScrollEndDrag(e) {
      this.startTimer();
  }

  renderChildView() {
      var childViews = [];
      var imgArr = imageData.data;
      for (var i = 0; i < imgArr.length; i++) {
          var imgItem = imgArr[i];
          console.log(imgItem)
          childViews.push(
              <Image key={i} source={require('./img/lunbo1.png')} style={{width: screenWidth, height: 120}}/>
          );
      }
      return childViews;
  }

    renderPageCircle() {
      var indicatorArr = [];
      var style;
      var imgArr = imageData.data;
      for (var i = 0; i < imgArr.length; i++) {
          style = (i === this.state.currentPage) ? {color: 'orange'} : {color: '#ffffff'};
          indicatorArr.push(
              <Text key={i} style={[{fontSize: 25}, style]}>&bull;</Text>
          )
      }
      return indicatorArr;
    }

    onAnimationEnd(e) {
        var offSetX = e.nativeEvent.contentOffset.x;
        var currentPage = Math.floor(offSetX / screenWidth);
        this.setState({
            currentPage: currentPage
        })
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
    },

    pageViewStyle: {
        width: screenWidth,
        height: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',

        position: 'absolute',
        bottom: 0,

        flexDirection: 'row',
        alignItems: 'center',
    }
});

