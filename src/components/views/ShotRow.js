import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import UserInfo from './UserInfo';
import ShotInfo from './ShotInfo';

const ShotRow = ({shot}) => {
  return (
    <View style={styles.shotContainer}>
      <ShotInfo shot={shot}/>
      <UserInfo user={shot.user}/>
    </View>
  )
};

const styles = StyleSheet.create({
  shotContainer: {
    width: 150,
    margin: 10
  },
  shotImageContainer: {
    backgroundColor: 'white'
  }
});

ShotRow.propTypes = {
  shot: React.PropTypes.object.isRequired
};

module.exports = ShotRow;

