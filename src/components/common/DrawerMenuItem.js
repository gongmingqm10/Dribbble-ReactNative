import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Separator from './Separator';

const DrawerMenuItem = ({title, iconName, onItemClick}) => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.4} onPress={onItemClick}>
      <Text style={styles.menuText}><Icon name={iconName} size={14} color={Colors.primary} />  {title}</Text>
    </TouchableOpacity>
    <Separator />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch'
  },
  menuText: {
    fontSize: 15,
    margin: 12,
    fontWeight: '400',
    color: Colors.primary,
  }
});
DrawerMenuItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  iconName: React.PropTypes.string,
  onItemClick: React.PropTypes.func
};

module.exports = DrawerMenuItem;