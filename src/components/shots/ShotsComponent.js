import React, {Component} from 'react';
import {
  View,
  ListView,
  RefreshControl,
  Platform,
  StyleSheet
} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Shots from '../../reducers/Shots';
import ShotRow from './ShotRow';
import LoadingFooter from '../common/LoadingFooter';
import ShotsAction from '../../actions/Shots';
import {Dimens, Colors} from '../../utils/Theme';

class ShotsComponent extends Component {
  constructor(props) {
    super(props);
    this.onRefresh = this.onRefresh.bind(this);
    this.onReachEnd = this.onReachEnd.bind(this);
    this.shotsStore = createStore(Shots, applyMiddleware(thunk));
  }

  componentDidMount() {
    this.unsubscribe = this.shotsStore.subscribe(() => {
      this.forceUpdate()
    });
    this.onReachEnd();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onRefresh() {
    // This is hacked, cause RefreshControl in iOS don't have enabled props
    const state = this.shotsStore.getState();
    if (state.loading) {
      this.shotsStore.dispatch(ShotsAction.resetPullRefresh());
    } else {
      this.shotsStore.dispatch(ShotsAction.refreshShots());
    }
  }

  onReachEnd() {
    const state = this.shotsStore.getState();
    if (!(state.finished || state.loading || state.error)) {
      this.shotsStore.dispatch(ShotsAction.fetchFromBottom(state.page));
    }
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
      <ListView
        style={styles.container}
        contentContainerStyle={styles.shotList}
        dataSource={state.dataSource}
        refreshControl={refreshControl}
        enableEmptySections={true}
        renderRow={(shot) => <ShotRow shot={shot} />}
        onEndReachedThreshold={100}
        onEndReached={this.onReachEnd}
        renderFooter={() => <LoadingFooter {...state} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? Dimens.iOSTop : 0,
    backgroundColor: Colors.pageColor
  },
  shotList: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

module.exports = ShotsComponent;