import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import UserInfo from '../common/UserInfo';
import ShotInfo from '../common/ShotInfo';
import {Actions} from 'react-native-router-flux';

const ShotRow = ({shot}) => {
  const openDetailPage = () => {
    Actions.shotPage({shot: shot});
  };

  return (
    <View style={styles.shotContainer}>
      <ShotInfo shot={shot} onItemClick={openDetailPage}/>
      <UserInfo 
        user={shot.user} 
        onItemClick={() => {
          Actions.userPage({user: shot.user});
        }}
      />
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

