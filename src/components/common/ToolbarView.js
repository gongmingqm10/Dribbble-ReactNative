import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors, Dimens} from '../../utils/Theme';
import {Actions} from 'react-native-router-flux';

const ToolbarView = ({title}) => {
  if (Platform.OS === 'ios') {
    return <View/>
  }
  return (
    <Icon.ToolbarAndroid
      style={styles.toolbar}
      title={title}
      navIconName="arrow-back"
      iconColor="white"
      titleColor="white"
      iconSize={28}
      onIconClicked={() => Actions.pop()}
    />
  )
};

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: Colors.primary,
    height: Dimens.androidTabbar,
    elevation: 8,
    shadowColor: Colors.lightGray,
    shadowRadius: 2,
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1}
  }
});

ToolbarView.propTypes = {
  title: React.PropTypes.string.isRequired
};

module.exports = ToolbarView;