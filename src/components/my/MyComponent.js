import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {Dimens} from '../../utils/Theme';

class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the default My page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Dimens.iOSTop,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

module.exports = MyComponent;