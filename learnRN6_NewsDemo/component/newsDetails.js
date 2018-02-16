import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

type Props = {};
export default class Find extends Component<Props> {

  render() {
    return (
      <WebView
        automaticallyAdjustContentInsets={true}
        style={styles.webView}
        source={{uri: this.props.rowData.url}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  },

  webView: {
    flex: 1,
  }

});


module.exports = Find;