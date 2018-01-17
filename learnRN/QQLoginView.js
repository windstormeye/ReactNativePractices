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
var screenWidth = Dimensions.get('window').width;

class QQLoginView extends Component<{}> {
    // 初始化 render相当于ViewDidLoad 返回具体的组件内容
    render() {
        // 通过return来返回
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image source={require('./img/baby1.png')} style={styles.headImageStyle} />
                {/*账号和密码*/}
                <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle} />
                <TextInput placeholder={'请输入密码'} password={true} style={styles.textInputStyle} />
                {/*登录*/}
                <View style={styles.loginBtnView}>
                    <Text style={{ color:'white' }} >登录</Text>
                </View>
                {/*设置*/}
                <View style={styles.settingViewStyle} >
                    <Text>无法登录</Text>
                    <Text>新用户</Text>
                </View>
                {/*其它登录方式*/}
                <View style={styles.otherLoginViewStyle} >
                    <Text>其它登录方式：</Text>
                    <Image source={require('./img/baby1.png')} style={styles.otherLoginImageStyle} />
                    <Image source={require('./img/baby1.png')} style={styles.otherLoginImageStyle} />
                    <Image source={require('./img/baby1.png')} style={styles.otherLoginImageStyle} />
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        alignItems: 'center',
    },

    headImageStyle: {
        marginTop: 50,
        marginBottom: 30,
        width: 80,
        height: 80,
        borderRadius: 40,
    },

    textInputStyle: {
        height: 38,
        width: screenWidth,
        backgroundColor: 'white',
        marginBottom: 1,
        textAlign: 'center',
    },

    loginBtnView: {
        marginTop: 30,
        marginBottom: 30,

      height: 40,
      width: screenWidth * 0.9,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',

        borderRadius: 5,
    },

    settingViewStyle: {
        flexDirection: 'row',
        width: screenWidth * 0.9,
        justifyContent: 'space-between',
    },

    otherLoginViewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 10,
    },

    otherLoginImageStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 5,

    }
});

// 把组件进行输出
module.exports = QQLoginView;