import React from 'react';
import {
  View,
  Text,
  ActivityIndicatorIOS,
  StyleSheet
} from 'react-native';
import {Strings, Colors} from '../../utils/Theme';

const LoadingFooter = ({finished, error}) => {
  if (error) {
    return (
      <View style={styles.footerContainer}>
        <Text style={[styles.loadingText, {color: Colors.errorRed}]}>{error.toString()}</Text>
      </View>
    );
  } else if (finished) {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.loadingText}>{Strings.messageDataLoaded}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.footerContainer}>
        <ActivityIndicatorIOS size="small" color={Colors.darkPrimary}/>
        <Text style={styles.loadingText}>{Strings.messageLoading}</Text>
      </View>
    );
  }
};
LoadingFooter.propTypes = {
  finished: React.PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  footerContainer: {
    width: 250,
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingText: {
    marginLeft: 6,
    marginRight: 6,
    color: Colors.darkPrimary,
    fontWeight: '500'
  }
});


module.exports = LoadingFooter;