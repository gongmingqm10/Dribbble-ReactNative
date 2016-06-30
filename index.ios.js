/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet
} from 'react-native';

import Main from './src/components/Main.ios';
import {Strings, Colors} from './src/Utils/Theme';

class Dribbble extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: Main,
          title: Strings.appName
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageColor
  }
});

AppRegistry.registerComponent('Dribbble', () => Dribbble);
