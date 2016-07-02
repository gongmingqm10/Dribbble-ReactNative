import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class TeamsComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the default Teams page</Text>
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

module.exports = TeamsComponent;