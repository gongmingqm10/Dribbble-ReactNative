import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../utils/Theme';
import Separator from '../common/Separator';
import HTMLView from 'react-native-htmlview';
import {Actions} from 'react-native-router-flux';

const UserHeader = ({user}) => (
  <View style={styles.container}>
    <Image style={styles.userAvatar} source={{uri: user.avatar_url}}/>
    <Text style={styles.username}>{user.name}</Text>
    <Text style={styles.userLocation}>{user.location}</Text>
    <HTMLView
      value={`<p>${user.bio}<p>`}
      stylesheet={htmlStyles}
      onLinkPress={(url) => Actions.webPage({url: url})}
    />
    <View style={styles.shareContainer}>
      <Icon style={styles.shareIcon} name="logo-twitter" size={24} color={Colors.lightGray}/>
      <Icon style={styles.shareIcon} name="logo-pinterest" size={24} color={Colors.lightGray}/>
      <Icon style={styles.shareIcon} name="logo-instagram" size={24} color={Colors.lightGray}/>
      <Icon style={styles.shareIcon} name="logo-tumblr" size={24} color={Colors.lightGray}/>
    </View>
    <Separator style={styles.separator}/>
  </View>
);

const htmlStyles = StyleSheet.create({
  p: {
    color: Colors.fontGray,
    margin: 8,
    fontSize: 18,
    padding: 0
  }
});
const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: Colors.pageColor,
    width: Dimensions.get('window').width
  },
  shareContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  shareIcon: {
    marginLeft: 4,
    marginRight: 4
  },
  userAvatar: {
    height: 64,
    width: 64,
    borderRadius: 32,
    resizeMode: 'cover'
  },
  username: {
    color: Colors.fontDark,
    fontSize: 23,
    fontWeight: "500",
    marginTop: 12
  },
  userLocation: {
    color: Colors.lightGray,
    marginTop: 4,
    fontSize: 16
  },
  separator: {
    marginTop: 16,
    width: Dimensions.get('window').width - 80
  }
});

UserHeader.propTypes = {
  user: React.PropTypes.object.isRequired
};

module.exports = UserHeader;