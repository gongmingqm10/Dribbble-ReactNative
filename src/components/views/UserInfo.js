import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import {Colors} from '../../Utils/Theme';

const UserInfo = ({user}) => (
  <View style={styles.userContainer}>
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
    margin: 6
  },
  avatar: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderColor: 'white',
    borderWidth: 1,
    resizeMode: 'contain'
  },
  username: {
    marginLeft: 3,
    fontSize: 12,
    color: Colors.darkPrimary,
    fontWeight: "600"
  }
});

UserInfo.propTypes = {
  user: React.PropTypes.object.isRequired
};

module.exports = UserInfo;

