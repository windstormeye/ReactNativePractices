import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS
} from 'react-native';

var Home = require("../component/home")
var Find = require("../component/find")
var Message = require("../component/message")
var Map = require("../component/map")
var Mine = require("../component/mine")

type Props = {};
export default class Main extends Component<Props> {

  constructor(props) {
    super(props);
    this.state={
      selectedItem: "home",
    };
  }

  render() {
    return (
      <TabBarIOS
        tintColor="black"
      >
        {/*首页*/}
        <TabBarIOS.Item
          icon={require('../img/news.png')}
          title="新闻"
          selected={this.state.selectedItem === "home"}
          onPress={() => {this.setState({selectedItem: "home"})}}
        >
          <NavigatorIOS
            tintColor="black"
            style={{flex: 1}}
            initialRoute={
              {
                component: Home,
                title: "新闻",
                leftButtonIcon: require("../img/find.png"),
                rightButtonIcon: require("../img/newsShare.png"),
              }
            }
          />
        </TabBarIOS.Item>
        {/*黄页*/}
        <TabBarIOS.Item
          icon={require('../img/yellowPages.png')}
          title="黄页"
          selected={this.state.selectedItem === "yellowPage"}
          onPress={() => {this.setState({selectedItem: "yellowPage"})}}
        >
          <NavigatorIOS
            style={{flex: 1}}
            initialRoute={
              {
                component: Find,
                title: "网页"
              }
            }
          />
        </TabBarIOS.Item>
        {/*发现*/}
        <TabBarIOS.Item
          icon={require('../img/LostFound.png')}
          title="失物"
          selected={this.state.selectedItem === "lost"}
          onPress={() => {this.setState({selectedItem: "lost"})}}
        >
          <NavigatorIOS
            style={{flex: 1}}
            initialRoute={
              {
                component: Message,
                title: "失物"
              }
            }
          />
        </TabBarIOS.Item>
        {/*地图*/}
        <TabBarIOS.Item
          icon={require('../img/map.png')}
          title="地图"
          selected={this.state.selectedItem === "map"}
          onPress={() => {this.setState({selectedItem: "map"})}}
        >
          <NavigatorIOS
            style={{flex: 1}}
            initialRoute={
              {
                component: Map,
                title: "地图"
              }
            }
          />
        </TabBarIOS.Item>
        {/*我的*/}
        <TabBarIOS.Item
          icon={require('../img/userCenter.png')}
          title="我的"
          selected={this.state.selectedItem === "mine"}
          onPress={() => {this.setState({selectedItem: "mine"})}}
        >
          <NavigatorIOS
            style={{flex: 1}}
            initialRoute={
              {
                component: Mine,
                title: "我的"
              }
            }
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});


module.exports = Main;