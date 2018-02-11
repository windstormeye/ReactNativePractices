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
  ListView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

var wine = require("./wine");
var Dimensions = require("Dimensions");
var screenWidth = Dimensions.get("window").width;
var cols = 3;
var cellWH = 100;
var vMargin = (screenWidth - cols * cellWH) / (cols + 1)
var hMargin = 25;

export default class App extends Component<Props> {

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(wine)
        };
    }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.rendenRow}
        contentContainerStyle={styles.listViewStyle}
      />
    );
  }

  rendenRow(rowData, sectionID, rowID, highlightRow) {
      console.log(rowData)
      return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => {alert("点击了" + rowID + "行")}}>
          <View style={styles.innerViewStyle}>
            <Image source={require("./wine.png")} style={styles.leftImageStyle} />
            <Text style={styles.topTextStyle}>{rowData.name}</Text>
          </View>
        </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
  listViewStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  innerViewStyle: {
    width: cellWH,
    height: cellWH,
    marginLeft: vMargin,
    marginTop: hMargin,

    alignItems: "center",
  },

  leftImageStyle: {
    width: 70,
    height: 70,
    marginRight: 15,
  },

  topTextStyle: {
    fontSize: 17,
    width: 70,
    height: 70,
    marginBottom: 10,
  },
});
