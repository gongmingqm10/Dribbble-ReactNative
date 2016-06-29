import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class ShotsComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the default Shots page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

module.exports = ShotsComponent;