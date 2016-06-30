import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../utils/Theme';

const ShotInfo = ({shot}) => (
  <View style={styles.container}>
    <Image
      style={styles.shotImage}
      source={{uri: shot.images.normal}}
    />
    <View style={styles.countView}>
      <Text style={styles.countText}>
        <Icon name="ios-eye" size={12} color={Colors.lightGray}/> {shot.views_count}
      </Text>
      <Text style={styles.countText}>
        <Icon name="ios-chatbubbles" size={12} color={Colors.lightGray}/> {shot.comments_count}
      </Text>
      <Text style={styles.countText}>
        <Icon name="ios-heart" size={12} color={Colors.lightGray}/> {shot.likes_count}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 3,
    borderColor: Colors.lighterGray,
    borderWidth: 1,
    elevation: 4,
    shadowColor: Colors.lightGray,
    shadowRadius: 2,
    shadowOpacity: 0.2,
    shadowOffset: {width: 1, height: 1}
  },
  shotImage: {
    resizeMode: 'cover',
    height: 120
  },
  countView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 6
  },
  countText: {
    marginLeft: 8,
    fontSize: 10,
    color: Colors.fontGray,
    textAlign: 'center'
  }
});


ShotInfo.propTypes = {
  shot: React.PropTypes.object.isRequired
};

module.exports = ShotInfo;
