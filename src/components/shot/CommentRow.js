import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import UserInfo from '../common/UserInfo';
import Separator from '../common/Separator';
import HTMLView from 'react-native-htmlview';
import {Colors} from '../../utils/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

class CommentRow extends React.Component {
  render() {
    const comment = this.props.comment;
    const likeView = comment.likes_count == 0 ? <View /> :(
      <Text style={styles.likeCounts}>
        <Icon name="ios-heart" size={12} color={Colors.lightGray}/> {comment.likes_count}
      </Text>
    );
    return (
      <View style={styles.container}>
        <UserInfo
          user={comment.user}
          styles={styles.userInfo}
          onItemClick={() => {
            Actions.pop();
            Actions.userPage({user: comment.user});
          }}
        />
        <HTMLView
          value={comment.body}
          onLinkPress={(url) => Actions.webPage({url: url})}
        />
        <View style={styles.footerInfo}>
          <Text style={styles.commentDate}>2 days ago</Text>
          {likeView}
        </View>
        <Separator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    alignItems: 'stretch'
  },
  content: {
    marginTop: 4
  },
  userInfo: {
    margin: 0
  },
  footerInfo: {
    marginTop: 6,
    flexDirection: 'row',
    marginBottom: 12
  },
  commentDate: {
    color: Colors.lightGray,
    fontSize: 14,
    flex: 1
  },
  likeCounts: {
    fontSize: 14,
    color: Colors.lightGray
  }

});

CommentRow.propTypes = {
  comment: React.PropTypes.object.isRequired
};

module.exports = CommentRow;