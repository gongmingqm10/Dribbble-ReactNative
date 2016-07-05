import React, {Component} from 'react';

import {
  View,
  WebView,
  StyleSheet,
  Platform
} from 'react-native';
import ToolbarView from './ToolbarView';
import {Dimens, Strings} from '../../utils/Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    marginTop: Platform.OS === 'ios' ? Dimens.iOSTop : 0
  }
});

class WebComponent extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ToolbarView title={Strings.titleWebView} />
        <WebView source={{uri: this.props.url}} />
      </View>
    );
  }
}

WebComponent.PropTypes = {
  url: React.PropTypes.string.isRequired
};

module.exports = WebComponent;

