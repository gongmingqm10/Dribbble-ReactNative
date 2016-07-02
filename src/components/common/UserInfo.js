import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import {Colors} from '../../utils/Theme';

const UserInfo = ({user, style = {}}) => (
  <View style={[styles.userContainer, ...style]}>
    <Image
      style={styles.avatar}
      source={{uri: user.avatar_url}}
    />
    <Text style={styles.username}>{user.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 6
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: 'white',
    borderWidth: 1,
    resizeMode: 'contain'
  },
  username: {
    marginLeft: 3,
    fontSize: 12,
    color: Colors.darkPrimary,
    fontWeight: "500",
    overflow: 'hidden'
  }
});

UserInfo.propTypes = {
  user: React.PropTypes.object.isRequired
};

module.exports = UserInfo;

