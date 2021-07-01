/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import RNFileSelector from 'react-native-file-selector';

import RNFS from 'react-native-fs';

import animatedPhoto from './assets/animated_photo.gif';
import photo from './assets/photo.jpg';
// import info from './assets/nfo.plist'

export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  _onPress() {
    let filter;
    if (Platform.OS === 'ios') {
      filter = [];
    } else if (Platform.OS === 'android') {
      filter = '.*\\.*';
    }

    RNFileSelector.Show({
      path: RNFS.DocumentDirectoryPath,
      filter: filter,
      title: 'Select File',
      closeMenu: true,
      editable: true,
      onDone: path => {
        console.log('file selected: ' + path);
      },
      onCancel: () => {
        console.log('cancelled');
      },
    });
  }

  componentDidMount() {
    // create a path you want to write to
    let animatedPhotoPath = RNFS.DocumentDirectoryPath + '/animated_photo.gif';
    let photoPath = RNFS.DocumentDirectoryPath + '/photo.jpg';
    // let infoPath = RNFS.DocumentDirectoryPath + "/info.plist";
    let assetsPath = RNFS.DocumentDirectoryPath + '/assets';

    // write the file
    RNFS.writeFile(animatedPhotoPath, animatedPhoto, 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
      })
      .catch(err => {
        console.log(err.message);
      });

    RNFS.writeFile(photoPath, photo, 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
      })
      .catch(err => {
        console.log(err.message);
      });

    RNFS.mkdir(assetsPath).then(success => {
      console.log('DIRECTORY CREATED');

      RNFS.writeFile(assetsPath + '/animated_photo.gif', animatedPhoto, 'utf8')
        .then(success => {
          console.log('DIRECTORY WRITTEN!');
        })
        .catch(err => {
          console.log(err.message);
        });

      RNFS.writeFile(assetsPath + '/photo.jpg', photo, 'utf8')
        .then(success => {
          console.log('DIRECTORY WRITTEN!');
        })
        .catch(err => {
          console.log(err.message);
        });
    });

    // RNFS.writeFile(infoPath, info, "utf8")
    //   .then(success => {
    //     console.log("FILE WRITTEN!");
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this._onPress();

            // this.setState({ visible: true });
          }}>
          <Text>Click</Text>
          <RNFileSelector
            title={'Select File'}
            visible={this.state.visible}
            onDone={path => {
              console.log('file selected: ' + path);
            }}
            onCancel={() => {
              console.log('cancelled');
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
