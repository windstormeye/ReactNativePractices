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
        // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        var getSectionData = (dataBlob, sectionID) => {
          return dataBlob[sectionID];
        }

        var getRowData = (dataBlob, sectionID, rowID) => {
          return dataBlob[sectionID + ":" + rowID];
        }

        this.state = {
            dataSource: new ListView.DataSource({
              getSectionData: getSectionData,
              getRowData: getRowData,
              rowHasChanged: (r1, r2) => r1 !== r2,
              sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            })
        };
    };

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.headerViewStyle}>
          <Text style={{color: "white", fontSize: 25}}>PJHubs</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSectionHeader={this.renderSectionHeader}
          contentContainerStyle={styles.listViewStyle}
        />
      </View>
    )
  }

  renderRow(rowData) {
      return (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.innerViewStyle}>
            <Image source={require("./wine.png")} style={styles.leftImageStyle} />
            <Text style={{fontSize: 17}}>{rowData.name}</Text>
          </View>
        </TouchableOpacity>
      );
  }

  renderSectionHeader(sectionData, sectionID) {
    return(
      <View style={styles.sectionViewStyle}>
        <Text style={{marginLeft: 10,}}>{sectionData}</Text>
      </View>
    )
  }

  componentDidMount() {
    this.loadDataFromJson()
  }

  loadDataFromJson() {
    var jsonData = wine.data;
    var dataBlob = {},
        sectionIDs = [],
        rowIDs = [],
        cars = [];

    for (var i = 0; i < jsonData.length; i++) {
      sectionIDs.push(i);
      dataBlob[i] = jsonData[i].title;
      cars = jsonData[i].cars;
      rowIDs[i] = [];

      for (var j = 0; j < cars.length; j ++) {
        rowIDs[i].push(j);
        dataBlob[i + ":" + j] = cars[j];
      }
    }

    this.setState({
      dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
    });
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },

  headerViewStyle: {
    height: 64,
    backgroundColor: 'orange',
    alignItems: "center",
    justifyContent: "center",
  },

  sectionViewStyle: {
    backgroundColor: "#e8e8e8",
    height: 25,

    justifyContent: "center",
  },

  listViewStyle: {

  },

  innerViewStyle: {
    width: 70,
    height: 70,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,

    flexDirection: "row",
    alignItems: "center",

    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 0.5,

  },

  leftImageStyle: {
    width: 70,
    height: 70,
    marginRight: 15,
  },
});
