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
  TouchableOpacity
} from 'react-native';

import RNFileSelector from 'react-native-file-selector'

export default class App extends Component<Props> {
  _onPress () {
    RNFileSelector.Show(
      {
        title: 'Select File',
        onDone: (path) => {
          console.log('file selected: ' + path)
        },
        onCancel: () => {
          console.log('cancelled')
        }
      }
    )
  }

  render() {
    return <View style={styles.container}>
        <TouchableOpacity onPress={this._onPress}>
          <Text>Click</Text>
        </TouchableOpacity>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
