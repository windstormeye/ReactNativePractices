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
      />
    );
  }

  rendenRow(rowData, sectionID, rowID, highlightRow) {
      console.log(rowData)
      return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => {alert("点击了" + rowID + "行")}}>
          <View style={styles.cellViewStyle}>
            <Image source={require("./wine.png")} style={styles.leftImageStyle} />
            <View style={styles.cellContainerViewStyle}>
              <Text style={styles.topTextStyle}>{rowData.name}</Text>
              <Text style={styles.bottomTextStyle}>¥{rowData.money}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
  cellViewStyle: {
    borderBottomWidth: 0.3,
    borderBottomColor: '#e8e8e8',
    padding: 10,
    flexDirection: 'row',
  },

  cellContainerViewStyle: {
    justifyContent: 'center',
  },

  leftImageStyle: {
    width: 70,
    height: 70,
    marginRight: 15,
  },

  topTextStyle: {
    fontSize: 17,
    width: screenWidth * 0.8,
    marginBottom: 10,
  },

  bottomTextStyle: {
    color: 'red',
  },
});
