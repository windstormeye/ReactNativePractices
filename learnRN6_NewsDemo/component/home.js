import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Image,
} from 'react-native';

var screenWidth = require("Dimensions").get("window").width;
var NewsDetails = require("../component/newsDetails");

export default class Home extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }

  renderRow(rowData) {
    return (
      <TouchableOpacity onPress={() => {this.pushNewsDetails(rowData)}}>
        <View style={styles.innerViewStyle}>
          <Image source={{uri: "https:" + rowData.member.avatar_large}} style={styles.leftImageStyle} />
          <View style={styles.textView}>
            <Text style={styles.innerTitleViewStyle}>{rowData.title}</Text>
            <Text numberOfLines={3} style={styles.innerTitleContentViewStyle}>{rowData.content}</Text>
            <View style={styles.innerTextsViewStyle}>
              <Text style={styles.innerAuthorTextViewStyle}>{rowData.member.username}</Text>
              <Text style={styles.innerTagTitleTextViewStyle}>{rowData.node.title}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  pushNewsDetails(rowData) {
    this.props.navigator.push({
      component: NewsDetails,
      title: rowData.title,
      passProps: {rowData},
    })
  }

  componentDidMount() {
    this.loadDataFromHttp()
  }

  loadDataFromHttp() {
    fetch("https://www.v2ex.com/api/topics/hot.json")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData)
        })
    })
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5fcff"
  },

  innerViewStyle: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(200, 200, 200)",
  },

  leftImageStyle: {
    width: 50,
    height: 50,
  },

  textView: {
    justifyContent: "space-between",
  },

  innerTitleViewStyle: {
    fontSize: 18,
    width: screenWidth - 70,
    marginLeft: 10,
  },

  innerTitleContentViewStyle: {
    fontSize: 15,
    padding: 10,
    width: screenWidth - 70,
    color: "rgb(100, 100, 100)",
  },

  innerTextsViewStyle: {
    marginBottom: -1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  innerAuthorTextViewStyle: {
    fontSize: 15,
    marginLeft: 10,
  },

  innerTagTitleTextViewStyle: {
    fontSize: 15,
    marginRight: 10,
    padding: 3,
    borderColor: "rgb(100, 100, 100)",
    borderWidth: 1,
    borderRadius: 3,
  },
});


module.exports = Home;