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
  TouchableOpacity,
} from 'react-native';


export default class App extends Component<{}> {

    static defaultProps={
        name: '1222'
    }

    constructor() {
        super();
        this.state = {
            title: '4666',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPressIn={()=>this.renderPress('移入')}
                    onPress={()=>this.renderPress('点击')}
                    onLongPress={()=>this.renderPress('长按')}
                    onPressOut={()=>this.renderPress('移开')}
                    >
                    <Text>2333</Text>
                </TouchableOpacity>
                <View>
                    <Text>{ this.state.title }</Text>
                </View>
            </View>

        );
    }

  // 更新状态机
  renderPress(event) {
      this.setState({
          title: this.props.name,
      })
  }``
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
