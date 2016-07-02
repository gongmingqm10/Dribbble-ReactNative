import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Theme';

const Separator = ({style}) => (
  <View style={[styles.line, style]}/>
);

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: Colors.lightGray
  }
});

export default Separator;