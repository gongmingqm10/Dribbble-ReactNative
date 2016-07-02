import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Separator from '../common/Separator';
import Icon from 'react-native-vector-icons/Ionicons';
import HTMLView from 'react-native-htmlview';
import {Colors, Strings} from '../../utils/Theme';
import {Actions} from 'react-native-router-flux';

class ShotHeader extends React.Component {
  constructor(props) {
    super(props);
    this.shot = this.props.shot;
  }

  render() {
    const userInfo = (
      <View style={styles.userContainer}>
        <Image style={styles.userAvatar} source={{uri: this.shot.user.avatar_url}}/>
        <View style={styles.userInfo}>
          <Text style={styles.shotTitle}>{this.shot.title}</Text>
          <View style={styles.userCreateView}>
            <Text style={styles.userPlainText}>by</Text>
            <Text style={styles.username}>{this.shot.user.name}</Text>
            <Text style={styles.userPlainText}>on</Text>
            <Text style={styles.createdTime}>{this.shot.created_at}</Text>
          </View>
        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        {userInfo}
        <Image style={styles.shotImage} source={{uri: this.shot.images.normal}}/>
        <View style={styles.countView}>
          <Text style={styles.countText}>
            <Icon name="ios-eye" size={14} color={Colors.lightGray}/> {this.shot.views_count} views
          </Text>
          <Text style={styles.countText}>
            <Icon name="ios-heart" size={14} color={Colors.lightGray}/> {this.shot.likes_count} likes
          </Text>
        </View>
        <Separator />
        <View style={styles.description}>
          <HTMLView
            value={this.shot.description}
            stylesheet={htmlStyles}
            onLinkPress={(url) => Actions.webPage({url: url})}
          />
        </View>
        <Separator style={styles.responseSeparator}/>
        <Text style={styles.responseLabel}>Responses</Text>
        <View style={styles.sortView}>
          <Text style={styles.sortText}>{Strings.labelOldest}</Text>
          <Text style={styles.sortText}>{Strings.labelNewest}</Text>
          <Text style={styles.sortText}>{Strings.labelLiked}</Text>
        </View>
      </View>
    )
  }
}

const htmlStyles = StyleSheet.create({
  a: {
    color: Colors.primary
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userContainer: {
    padding: 12,
    flexDirection: 'row'
  },
  userAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16
  },
  userInfo: {
    marginLeft: 12
  },
  shotTitle: {
    color: Colors.fontDark,
    fontSize: 14
  },
  userPlainText: {
    fontSize: 14,
    color: Colors.fontGray,
    marginRight: 3
  },
  username: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
    marginRight: 3
  },
  createdTime: {
    fontSize: 14,
    color: Colors.lightGray
  },
  userCreateView: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center'
  },

  shotImage: {
    resizeMode: 'cover',
    height: 300
  },
  countView: {
    padding: 12,
    flexDirection: 'row'
  },
  countText: {
    fontSize: 14,
    color: Colors.lightGray,
    marginRight: 12
  },
  description: {
    padding: 12
  },
  responseSeparator: {
    marginLeft: 12,
    marginRight: 12
  },
  responseLabel: {
    color: Colors.fontDark,
    marginTop: 12,
    fontSize: 14,
    marginLeft: 12
  },
  sortView: {
    marginTop: 4,
    marginLeft: 12,
    marginBottom: 4,
    flexDirection: 'row'
  },
  sortText: {
    marginRight: 6,
    color: Colors.lightGray,
    fontSize: 14
  }

});

ShotHeader.propTypes = {
  shot: React.PropTypes.object.isRequired
};

module.exports = ShotHeader;