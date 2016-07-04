import React from 'react';
import {
  StyleSheet,
  View,
  RefreshControl,
  ListView
} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Colors, Dimens} from '../../utils/Theme';
import Shots from '../../reducers/Shots';
import UserShotsAction from '../../actions/UserShots';
import UserHeader from './UserHeader';
import LoadingFooter from '../common/LoadingFooter';
import ShotInfo from '../common/ShotInfo';
import {Actions} from 'react-native-router-flux';

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onRefresh = this.onRefresh.bind(this);
    this.onReachEnd = this.onReachEnd.bind(this);
    this.shotsStore = createStore(Shots, applyMiddleware(thunk));
    this.user = this.props.user;
  }
  componentDidMount() {
    this.unsubscribe = this.shotsStore.subscribe(() => {
      this.forceUpdate()
    });
    // Auto call the reach end to make first loading happen. This is tricky and caused by Navigator!!
    this.onReachEnd();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onRefresh() {
    // This is hacked, cause RefreshControl in iOS don't have enabled props
    const state = this.shotsStore.getState();
    if (state.loading) {
      this.shotsStore.dispatch(UserShotsAction.resetPullRefresh());
    } else {
      this.shotsStore.dispatch(UserShotsAction.refreshShots(this.user.id));
    }
  }

  onReachEnd() {
    const state = this.shotsStore.getState();
    if (!(state.finished || state.loading || state.error)) {
      this.shotsStore.dispatch(UserShotsAction.fetchFromBottom(this.user.id, state.page));
    }
  }
  
  replaceToShotDetail(shot) {
    Actions.pop();
    Actions.shotPage({shot: Object.assign({}, shot, {user: this.user})});
  }
  
  render() {
    const state = this.shotsStore.getState();
    const refreshControl = (
      <RefreshControl
        tintColor={Colors.primary}
        refreshing={state.refreshing}
        enabled={!state.loading}
        onRefresh={this.onRefresh}
      />
    );
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.shotList}
          dataSource={state.dataSource}
          refreshControl={refreshControl}
          enableEmptySections={true}
          renderRow={(shot) => {
            return (
              <ShotInfo
                shot={shot}
                onItemClick={this.replaceToShotDetail.bind(this, shot)}
                style={styles.shotInfo}
              />
            )
          }}
          onEndReachedThreshold={100}
          onEndReached={this.onReachEnd}
          renderHeader={() => <UserHeader user={this.user}/>}
          renderFooter={() => <LoadingFooter {...state} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Dimens.iOSTop,
    backgroundColor: Colors.pageColor
  },
  shotList: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  shotInfo: {
    width: 150,
    margin: 10
  }
});

UserComponent.propTypes = {
  user: React.PropTypes.object.isRequired
};

module.exports = UserComponent;