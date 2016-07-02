import React, {Component} from 'react';

import {
  View,
  WebView,
  StyleSheet,
  Platform
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    marginTop: (Platform.OS === 'ios') ? 0 : 56
  }
});

class WebComponent extends Component {
  render() {
    return(
      <View style={styles.container}>
        <WebView source={{uri: this.props.url}} />
      </View>
    );
  }
}

WebComponent.PropTypes = {
  url: React.PropTypes.string.isRequired
};

module.exports = WebComponent;

