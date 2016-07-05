import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import {Dimens} from '../../utils/Theme';

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
    marginTop: Platform.OS === 'ios' ? Dimens.iOSTop : 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

module.exports = TeamsComponent;