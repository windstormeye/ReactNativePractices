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
  TabBarIOS,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      selectedTabBarItem: "home"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headViewStyle}>
          <Text style={{fontSize: 25, marginTop: 10}}>PJHubs</Text>
        </View>
        <TabBarIOS
          barTintColor= "black"
          style={{flex: 1}}
        >
          <TabBarIOS.Item
            systemIcon= "contacts"
            badge= "3"
            selected={this.state.selectedTabBarItem == "home"}
            onPress={() => {this.setState({selectedTabBarItem: "home"})}}
          >
            <View style={[styles.commonViewStyle, {backgroundColor: "red"}]}>
              <Text style={styles.commonTextStyle}>首页</Text>
            </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon= "bookmarks"
            selected={this.state.selectedTabBarItem == "second"}
            onPress={() => {this.setState({selectedTabBarItem: "second"})}}
          >
            <View style={[styles.commonViewStyle, {backgroundColor: "blue"}]}>
              <Text style={styles.commonTextStyle}>首页</Text>
            </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon= "downloads"
              selected={this.state.selectedTabBarItem == "third"}
              onPress={() => {this.setState({selectedTabBarItem: "third"})}}
          >
            <View style={[styles.commonViewStyle, {backgroundColor: "green"}]}>
              <Text style={styles.commonTextStyle}>首页</Text>
            </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon= "search"
                selected={this.state.selectedTabBarItem == "four"}
                onPress={() => {this.setState({selectedTabBarItem: "four"})}}
          >
            <View style={[styles.commonViewStyle, {backgroundColor: "purple"}]}>
              <Text style={styles.commonTextStyle}>首页</Text>
            </View>
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  commonViewStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  commonTextStyle: {
    fontSize: 25,
  },

  headViewStyle: {
    height: 64,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
